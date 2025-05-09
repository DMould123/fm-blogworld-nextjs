import { handleSubmission } from "@/app/utils/actions";
import { Submitbutton } from "@/components/general/Submitbutton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogroute() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <img
            src="/images/logo.jpg"
            alt="FM BlogWorld Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>
            Create a new FM Blog to share with the FM community. You can create
            a blog about anything related to FM, including tips, tricks, and
            tutorials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input name="title" required type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" placeholder="Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input name="url" required type="url" placeholder="Image URL" />
            </div>
            <Submitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
