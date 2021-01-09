const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports.uploadFile = async (arrayfiles, callback) => {
  console.log(
    "dang chay upload file       -----------------------" + arrayfiles
  );

  if (!arrayfiles || !arrayfiles[0] || arrayfiles[0].name == "") {
    callback(null, null);
    return;
  }

  let count = 0;
  let urls = [];
  try {
    await arrayfiles.forEach(async (file) => {
      await cloudinary.uploader.upload(
        file.path,
        {
          resource_type: "auto",
          folder: "sample",
        },
        (err, result) => {
          if (err) {
            callback(err, {});
          } else {
            count++;
            urls.push(result.url);
          }
        }
      );

      if (count == arrayfiles.length) {
        console.log(urls);
        callback(null, urls);
      }
    });
  }catch (error) {
    callback(error, null);
  }

  // console.log(
  //   "dang chay upload file       -----------------------" + arrayfiles
  // );
  // if (!arrayfiles || !arrayfiles[0] || arrayfiles[0].name == "") {
  //   callback(null, null);
  //   return;
  // }

  // let count = 0;
  // let urls = [];
  // try {
  //   await arrayfiles.forEach(async (file) => {
  //     await cloudinary.uploader.upload(
  //       file.path,
  //       {
  //         resource_type: "auto",
  //         folder: "sample",
  //       },
  //       (err, result) => {
  //         if (err) {
  //           callback(err, {});
  //         } else {
  //           count++;
  //           urls.push(result.url);
  //         }
  //       }
  //     );

  //     if (count == arrayfiles.length) {
  //       console.log(urls);
  //       callback(null, urls);
  //     }
  //   });
  // } catch (error) {
  //   callback(error, null);
  // }



//   await cloudinary.uploader.upload(arrayfiles.path, {
//     resource_type: "auto",
//     folder: "sample",
//   }, (err, result) => {
//     if (err) {
//       callback(err, {});
//     } else {
//       count++;
//       url = result.url;
//     }
//   }
//   );
//   callback(null, url);
// } catch (error) {
//   callback(error, null);
};