import { Feature } from "@/types";
import TextAreaInput from "./TextAreaInput";
import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";
import { can } from "@/types/helpers";

export default function NewCommentForm({ feature }: { feature: Feature }) {
  const user = usePage().props.auth.user

  const { data, setData, post, processing } = useForm({
    'comment': ''
  })

  const createComment: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('comment.store', feature.id), {
      preserveScroll: true,
      onSuccess: () => setData('comment', '')
    })
  }

  if (!can(user, 'manage_comments')) {
    return (
      <div className="text-center text-gray-600">
        You do not have permission to leave comments
      </div>
    )
  }

  return (
    <form onSubmit={createComment} >
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 mb-4">
        <TextAreaInput
          rows={1}
          value={data.comment}
          onChange={(e) => setData('comment', e.target.value)}
          className="mt-1 block w-full"
          placeholder="Your Comment"
        ></TextAreaInput>

        <PrimaryButton disabled={processing}>Comment</PrimaryButton>
      </div>
    </form>
  )
}