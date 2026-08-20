import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Input, Textarea, Button } from "@heroui/react";

interface ContactFormSectionProps {
  action: string | null;
  setAction: (action: string | null) => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  action,
  setAction,
}) => {
  const { t } = useTranslation();

  return (
    <section className="mt-16 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {t("about.contactUs")}
      </h2>
      {/* TODO [S3KWEB-7]: Implement the form submit functionality */}
      <Form className="space-y-6" onReset={() => setAction("reset")}>
        <Input
          isRequired
          errorMessage={t("about.contactForm.usernameError")}
          label={t("about.contactForm.usernameLabel")}
          labelPlacement="outside"
          name="username"
          placeholder={t("about.contactForm.usernamePlaceholder")}
          type="text"
        />
        <Input
          isRequired
          errorMessage={t("about.contactForm.emailError")}
          label={t("about.contactForm.emailLabel")}
          labelPlacement="outside"
          name="email"
          placeholder={t("about.contactForm.emailPlaceholder")}
          type="email"
        />
        <Textarea
          disableAutosize
          isRequired
          classNames={{ input: "resize-y min-h-[100px]" }}
          label={t("about.contactForm.descriptionLabel")}
          labelPlacement="outside"
          placeholder={t("about.contactForm.descriptionPlaceholder")}
        />
        <div className="flex gap-2 text-center">
          <Button color="primary" type="submit">
            {t("about.contactForm.submit")}
          </Button>
          <Button type="reset" variant="flat">
            {t("about.contactForm.reset")}
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </section>
  );
};

export default ContactFormSection;
