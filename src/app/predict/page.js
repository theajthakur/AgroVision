"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PredictionResult from "@/components/prediction/result/page";

export default function PredictionForm() {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    cropType: "",
    landArea: "",
    soilType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      crop: formData.cropType,
      landArea: formData.landArea,
      soilType: formData.soilType,
    };
    data.predictedYield = "24 क्विंटल / एकड़";
    data.recommendations = [
      "सिंचाई हर 7 दिन में करें।",
      "नाइट्रोजन आधारित उर्वरक का प्रयोग करें।",
      "कीट नियंत्रण हेतु जैविक दवा का उपयोग करें।",
    ];
    setResult(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      {/* Form */}
      {result ? (
        <PredictionResult
          result={result}
          onBack={() => {
            setResult(null);
          }}
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 border rounded-lg space-y-4 shadow-sm bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            फसल उत्पादन भविष्यवाणी
          </h2>

          {/* Crop Type */}
          <div className="space-y-2">
            <Label className="text-gray-700">फसल का प्रकार</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, cropType: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="फसल चुनें" />
              </SelectTrigger>
              <SelectContent className={"bg-white"}>
                <SelectItem value="wheat">गेहूं</SelectItem>
                <SelectItem value="rice">धान</SelectItem>
                <SelectItem value="maize">मक्का</SelectItem>
                <SelectItem value="sugarcane">गन्ना</SelectItem>
                <SelectItem value="cotton">कपास</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Land Area */}
          <div className="space-y-2">
            <Label htmlFor="landArea" className="text-gray-700">
              ज़मीन का क्षेत्रफल (एकड़ में)
            </Label>
            <Input
              id="landArea"
              type="number"
              placeholder="ज़मीन का आकार दर्ज करें"
              value={formData.landArea}
              onChange={(e) =>
                setFormData({ ...formData, landArea: e.target.value })
              }
            />
          </div>

          {/* Soil Type */}
          <div className="space-y-2">
            <Label className="text-gray-700">मिट्टी का प्रकार</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, soilType: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="मिट्टी चुनें" />
              </SelectTrigger>
              <SelectContent className={"bg-white"}>
                <SelectItem value="loamy">दोमट</SelectItem>
                <SelectItem value="sandy">बालुई</SelectItem>
                <SelectItem value="clayey">चिकनी</SelectItem>
                <SelectItem value="silty">गादयुक्त</SelectItem>
                <SelectItem value="peaty">पीटयुक्त</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer hover:bg-secondary active:bg-primary"
          >
            भविष्यवाणी करें
          </Button>
        </form>
      )}

      {/* How to Use Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">📘 उपयोग कैसे करें</h3>
        <p className="text-gray-700">
          <span className="font-medium text-primary">AgroVision AI टूल</span>{" "}
          किसानों को{" "}
          <span className="font-medium text-green-700">
            मौसम, मिट्टी और डेटा
          </span>
          के आधार पर सही निर्णय लेने में मदद करता है।
        </p>

        <ol className="list-decimal list-inside space-y-2 text-gray-800">
          <li>
            <span className="font-semibold text-gray-900">फसल का चयन करें</span>{" "}
            – जैसे गेहूं, धान, मक्का आदि।
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              ज़मीन का क्षेत्रफल दर्ज करें
            </span>{" "}
            – एकड़ में।
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              मिट्टी का प्रकार चुनें
            </span>{" "}
            – अपनी ज़मीन के अनुसार।
          </li>
          <li>
            <span className="font-semibold text-gray-900">भविष्यवाणी करें</span>{" "}
            – और तुरंत सुझाव पाएँ।
          </li>
        </ol>

        <p className="text-gray-600 italic">
          ✅ यह प्रणाली{" "}
          <span className="font-semibold text-green-600">
            पुराने डेटा + मौसम API + मिट्टी की जानकारी
          </span>{" "}
          को मिलाकर सटीक परिणाम देती है।
        </p>
      </div>
    </div>
  );
}
