const connection = require("../database/connection");
const yup = require("yup");

module.exports = {
  async index(request, response) {
    const listEstablishments = await connection("company").select("*");

    return response.json(listEstablishments);
  },

  async show(request, response) {
    const { id } = request.params;

    const listEstablishment = await connection({ c: "company" }).where(
      "c.id",
      id
    );

    return response.json(listEstablishment);
  },

  async create(request, response) {
    const {
      name,
      industry,
      whatsapp,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
    } = request.body;

    const establishment_id = request.headers.authorization;

    const data = {
      name,
      industry,
      whatsapp,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
      establishment_id,
    };

    const schema = yup.object().shape({
      name: yup.string().required(),
      industry: yup.string().required(),
      whatsapp: yup.number().required(),
      latitude: yup.number().required(),
      longitude: yup.number().required(),
      open_on_weekends: yup.boolean().required(),
      opening_hours: yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const [id] = await connection("company").returning("id").insert(data);

    const requestImages = request.files;

    const images = requestImages.map((image) => {
      return { path: image.key, path: image.location };
    });

    for (const image of images) {
      const response = await connection("images").insert({
        path: image.path,
        url: image.location,
        company_id: id,
      });
    }

    return response.status(201).json({ id });
  },
};
