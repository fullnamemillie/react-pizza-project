import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
  className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="143" cy="172" r="5" /> 
    <rect x="135" y="305" rx="0" ry="0" width="48" height="0" /> 
    <rect x="218" y="267" rx="0" ry="0" width="1" height="2" /> 
    <rect x="-2" y="270" rx="10" ry="10" width="280" height="28" /> 
    <rect x="226" y="363" rx="0" ry="0" width="6" height="0" /> 
    <rect x="73" y="364" rx="0" ry="0" width="1" height="0" /> 
    <rect x="-1" y="316" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="420" rx="10" ry="10" width="95" height="30" /> 
    <rect x="132" y="420" rx="25" ry="25" width="147" height="45" /> 
    <circle cx="139" cy="124" r="122" />
  </ContentLoader>
)

export default Skeleton;