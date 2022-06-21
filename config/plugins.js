module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "prescott-pal"),
        api_key: env("CLOUDINARY_KEY", "346471934148321"),
        api_secret: env("CLOUDINARY_SECRET", "4dJkGOqMO2kViCt8h4b3BoEupSA"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
