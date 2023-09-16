import React from "react";
import { FormBox } from "./style";
import { useForm } from "react-hook-form";
import InputMask from "../forms/InputMask";
import Input from "../forms/Input";
import Textarea from "../forms/Textarea";
import { useTranslation } from "react-i18next";

const values = {
  phone: "",
  name: "",
};

function Form() {
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    // setValue,
  } = useForm(values);
  return (
    <FormBox>
      <div className="container">
        <h3 className="form-name">Buyurtma berish</h3>
        <p className="form-text">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <form action="" className="form-list">
          <Input
            name="name"
            control={control}
            errors={errors}
            labelProps={{
              label: "Ф.И.Ш",
              labelStyleName: "defaultLabel",
            }}
            inputStyleName="formInput"
          />
          <InputMask
            name="phone"
            control={control}
            errors={errors}
            showError
            maskProps={{
              mask: "+\\9\\98\\ 99 999-99-99",
              placeholder: "+998 (__) ___-__-__",
            }}
            inputStyleName="formInput"
            labelProps={{
              label: "Номер телефона",
              labelStyleName: "defaultLabel",
            }}
          />
          <Textarea
            name="description"
            control={control}
            errors={errors}
            inputStyleName="announceInput"
            showError
            textareaProps={{
              placeholder: t("Your Message"),
              minHeight: "145px",
              background: "#fcfdff !important",
              border: "1px solid #f0f4fa",
            }}
            labelProps={{
              label: t("Your Message"),
            }}
          />
          <button type="submit" className="form-button">
            Yuborish
          </button>
        </form>
      </div>
    </FormBox>
  );
}

export default Form;
