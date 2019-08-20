import axios from "axios";

export const goodslist = params => axios.get( '/getprodlist',params);
export const getlunbotu = params => axios.get( '/getlunbo',params);
export const getnewslist = params => axios.get( '/getnewslist',params);
export const getimgcategory = params => axios.get( '/getimgcategory',params);
export const getimages = params => axios.get( '/getimages/'+params);
export const getimageinfo = params => axios.get( '/getimageInfo/'+params);
export const getthumbImg = params => axios.get( '/getthumimages/'+params);
export const getgoods = params => axios.get( '/getgoods?pageindex='+params);
export const getgoodsdesc = params => axios.get( '/goods/getinfo/'+params);
export const getmoreimgs = params => axios.get( '/getthumimages/'+params);
export const getsjdesc = params => axios.get( '/goods/getdesc/'+params);