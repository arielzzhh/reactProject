import Joi from "joi";

const titleSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
});
const subTitleSchema = Joi.object({
  subTitle: Joi.string().min(2).max(256).required(),
});


const DescriptionSchema = Joi.object({
  Description: Joi.string().min(2).max(256).required(),
});

const phoneSchema = Joi.object({
  phone: Joi.string().min(2).max(256).required(),
});
const emailSchema = Joi.object({
  email: Joi.string().min(2).max(256).required(),
});



const webSchema = Joi.object({
  web: Joi.string().min(2).max(256).required(),
});
const urlSchema = Joi.object({
  url: Joi.string().min(2).max(256).required(),
});

const altSchema = Joi.object({
  alt: Joi.string().min(2).max(256).required(),
});
const stateSchema = Joi.object({
  state: Joi.string().min(2).max(256).required(),
});


const countrySchema = Joi.object({
  country: Joi.string().min(2).max(256).required(),
});
const citySchema = Joi.object({
  city: Joi.string().min(2).max(256).required(),
});
const streetSchema = Joi.object({
  street: Joi.string().min(2).max(256).required(),
});


const houseNumberSchema = Joi.object({
  houseNumber: Joi.string().min(2).max(256).required(),
});
const zipSchema = Joi.object({
  zip: Joi.string().min(2).max(256).required(),
});



const validateTitleSchema = (title) => titleSchema.validate(title);
const validateSubTitleSchema = (subTitle) => subTitleSchema.validate(subTitle);
const validatephoneSchema = (phone) => phoneSchema.validate(phone);
const validatDescriptionSchema = (Descriptio) => DescriptionSchema.validate(Descriptio);
const validateemailSchema = (email) => DescriptionSchema.validate(email);




const validateSchema = {
  title: validateTitleSchema,
  subTitle: validateSubTitleSchema,
};

export default validateSchema;
