import { Upload } from "lucide-react";

import Button from "../ui/Button";

function UploadResume() {
  return (
    <Button size="lg">
      <Upload size={18} />
      Upload Resume
    </Button>
  );
}

export default UploadResume;
