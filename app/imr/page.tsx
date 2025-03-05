"use client";
import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const ImageRecognition = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const recognizeImage = async () => {
    setLoading(true);
    toast.loading("AI is recognizing your image...");

    const img = document.getElementById(
      "uploadedImg"
    ) as HTMLImageElement | null;

    if (!img) {
      setLoading(false);
      toast.dismiss();
      return toast.error("Image not found!");
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const model = await mobilenet.load();

      console.log("Model Loaded Successfully");
      const predictions = await model.classify(img);
      console.log(predictions);

      setResult(predictions[0]?.className || "No Object Detected");
      toast.success("Image Recognized Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
      toast.dismiss();
    }
  };

  return (
    <div className="text-center space-y-4">
      <Toaster position="top-center" />
      <input
        type="file"
        onChange={handleUpload}
        className="block mx-auto mb-4 cursor-pointer"
        accept="image/*"
      />
      {image && (
        <img
          src={image}
          id="uploadedImg"
          crossOrigin="anonymous"
          onLoad={() => console.log("Image loaded successfully")}
          className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto"
        />
      )}
      {image && !loading && (
        <Button
          onClick={recognizeImage}
          className="bg-blue-500 hover:bg-blue-700"
        >
          Detect Image 🔍
        </Button>
      )}
      {loading && (
        <Loader2 className="mx-auto animate-spin text-blue-500" size={40} />
      )}
      {result && <p className="mt-4 text-xl font-semibold">{result}</p>}
    </div>
  );
};

export default ImageRecognition;
