// import React from "react";
import { userInfo, filterSelect } from "./recoil-store/Store";
import { useRecoilValue } from "recoil";

const ComponentOne = () => {
  const userData = useRecoilValue(userInfo);
  const userProduct = useRecoilValue(filterSelect);

  return (
    <>
      <div>Firstname: {userData.firstName}</div>
      <div>Lastname: {userData.lastName}</div>
      <div>Productname: {userProduct.productname}</div>
      <div>Product user name: {userProduct.username.firstName}</div>
    </>
  );
};

export default ComponentOne;
