import React from "react";
import "./Terms.css";
import xmark_img from "../picture/Xmark.png"

function Terms(probs) {
  const {display} = probs;
  return (
    <div className="terms_container">
      <img className="terms_xmark" src={xmark_img} alt="xmark_img" onClick={display}></img>
      <h1 className="terms_header">Term of service</h1>
      <h3 className="terms_subheader">Website Terms and Conditions of Use</h3>
      <div className="terms_rule">
        <p className="terms_subject">1. Terms</p>
        <p className="terms_content">By accessing this Website, accessible from www.KUlony.co.th, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
        <p className="terms_subject">2. Use License</p>
        <p className="terms_content">Permission is granted to temporarily download one copy of the materials on SandWitchTuna's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="terms_content">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on SandWitchTuna's Website;</li>
        </ul>  
      </div>
    </div>
    
    
  );
}
export default Terms;
