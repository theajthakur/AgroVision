"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PredictionResult({ result, onBack }) {
  const lang = {
    wheat: "गेहूं",
    rice: "धान",
    maize: "मक्का",
    sugarcane: "गन्ना",
    cotton: "कपास",
  };

  const soilLang = {
    loamy: "दोमट",
    sandy: "बालुई",
    clayey: "चिकनी",
    silty: "गादयुक्त",
    peaty: "पीटयुक्त",
  };

  const data = result || demoResult;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card className="shadow-md border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-700">
            🌾 भविष्यवाणी परिणाम
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <p>
              <span className="font-semibold">फसल:</span> {lang[data.crop]}
            </p>
            <p>
              <span className="font-semibold">भूमि क्षेत्र:</span>{" "}
              {data.landArea}
            </p>
            <p>
              <span className="font-semibold">मिट्टी का प्रकार:</span>{" "}
              {soilLang[data.soilType]}
            </p>
            <p>
              <span className="font-semibold">अनुमानित उपज:</span>{" "}
              {data.predictedYield}
            </p>
          </div>

          {/* Recommendations */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">✅ सुझाव</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {data.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center pt-4">
            <Button onClick={onBack}>🔙 वापस जाएँ</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
