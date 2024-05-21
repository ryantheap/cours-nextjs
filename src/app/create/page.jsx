"use client";

import { useRef } from "react";
import { create } from "@/actions/create-article";
import { toast } from "react-toastify";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const title = useRef("");
  const content = useRef("");
  const form = useRef("");

  const prepareArticle = async () => {
    try {
      await create(title.current.value, content.current.value);
    } catch (e) {
      toast.error(e.message);
    }
    form.current.reset();
    toast.success("Article crée !");
    router.push("/");
  };

  return (
    <div>
      <h1> Créer un post</h1>
      <div className="w-[500px] m-auto bg-gray-100 p-5">
        <form ref={form} action={prepareArticle}>
          <div>
            <input
              type="text"
              ref={title}
              placeholder="Titre"
              className="px-4 py-2 w-full rounded"
            />
          </div>
          <div className="mt-3">
            <textarea
              ref={content}
              placeholder="Contenu"
              className="px-4 py-2 w-full rounded"
            ></textarea>
          </div>
          <div className="mt-3">
            <Button>Ajouter</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
