import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  User,
  Mail,
  BookOpen,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

type ContactFormData = {
  prenom: string;
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ mode: "onTouched" });

  const { submit } = useWeb3Forms<ContactFormData>({
    access_key: import.meta.env.VITE_WEB3FORMS_KEY as string,
    settings: {
      from_name: "Portfolio Contact",
      subject: "Nouveau message depuis mon portfolio",
    },
    onSuccess: () => {
      setIsSuccess(true);
      setIsError(false);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: () => {
      setIsError(true);
      setIsSuccess(false);
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => submit(data);

  const inputClass = "input input-bordered w-full pl-10 focus:input-primary";
  const fieldClass = "form-control w-full";

  return (
    <section
      id="contact-section"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tight">Contact</h2>
      </div>

      <div className="card bg-base-200 shadow-xl w-full max-w-lg">
        <div className="card-body gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div className={fieldClass}>
              <label className="label">
                <span className="label-text">Prénom</span>
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                />
                <input
                  type="text"
                  placeholder="Jean"
                  className={inputClass}
                  {...register("prenom", { required: "Requis" })}
                />
              </div>
              {errors.prenom && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.prenom.message}
                  </span>
                </label>
              )}
            </div>

            <div className={fieldClass}>
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                />
                <input
                  type="text"
                  placeholder="Dupont"
                  className={inputClass}
                  {...register("nom", { required: "Requis" })}
                />
              </div>
              {errors.nom && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.nom.message}
                  </span>
                </label>
              )}
            </div>
          </div>

          <div className={fieldClass}>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
              />
              <input
                type="email"
                placeholder="jean@example.com"
                className={inputClass}
                {...register("email", {
                  required: "Requis",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Email invalide",
                  },
                })}
              />
            </div>
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              </label>
            )}
          </div>

          <div className={fieldClass}>
            <label className="label">
              <span className="label-text">Sujet</span>
            </label>
            <div className="relative">
              <BookOpen
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
              />
              <input
                type="text"
                placeholder="Mission freelance / Collaboration..."
                className={inputClass}
                {...register("sujet", { required: "Requis" })}
              />
            </div>
            {errors.sujet && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.sujet.message}
                </span>
              </label>
            )}
          </div>

          <div className={fieldClass}>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <div className="relative">
              <MessageSquare
                size={16}
                className="absolute left-3 top-4 text-base-content/40"
              />
              <textarea
                rows={4}
                placeholder="Décrivez votre projet..."
                className="textarea textarea-bordered w-full pl-10 focus:textarea-primary resize-none"
                {...register("message", {
                  required: "Requis",
                  minLength: { value: 10, message: "Minimum 10 caractères" },
                })}
              />
            </div>
            {errors.message && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.message.message}
                </span>
              </label>
            )}
          </div>

          {isSuccess && (
            <div role="alert" className="alert alert-success">
              <CheckCircle size={18} />
              <span>Message envoyé avec succès !</span>
            </div>
          )}
          {isError && (
            <div role="alert" className="alert alert-error">
              <AlertCircle size={18} />
              <span>Une erreur s'est produite. Réessayez.</span>
            </div>
          )}

          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="btn btn-accent w-full gap-2"
          >
            <Send size={16} />
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </div>
      </div>
    </section>
  );
}
