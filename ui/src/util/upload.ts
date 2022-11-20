import server from "./../axios/server";
const upload = async (e: any) => {
  e.preventDefault();
  try {
    // if (!isAdmin) return alert("Bạn không được phép thực hiện thao tác này.");
    const file = e.target.files[0];

    if (!file) return alert("File không tồn tại.");

    if (file.size > 1024 * 1024)
      return alert("Dung lượng ảnh vượt mức cho phép.");

    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return alert("Ảnh sai định dạng.");

    let formData = new FormData();
    formData.append("file", file);
    // setLoading(true);
    const res = await server.upload.upload(formData);
    // const _imgs = [...imagess];
    // _imgs.push(res.data);
    // setImagess(_imgs);
    // setLoading(false);
    // getPayload(product, res.data);
    return res;
  } catch (err) {
    // const failr = err.response.data.msg;
    // alert(failr);
  }
};
export default upload;
