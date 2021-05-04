import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
  return (

  <div id="mc_embed_signup">
    <form action="https://app.us1.list-manage.com/subscribe/post?u=f879c2a4846430ec3eb759afc&amp;id=4c5d95752f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
      <h2>Message / Poruka</h2>
    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
    <div class="mc-field-group">
      <label for="mce-EMAIL">Email  <span class="asterisk">*</span>
    </label>
      <input type="email" defaultValue="" name="EMAIL" class="required email" id="mce-EMAIL"></input>
    </div>
    <div class="mc-field-group">
      <label for="mce-NAME">Name </label>
      <input type="text" defaultValue="" name="NAME" class="" id="mce-NAME"/>
    </div>
    <div class="mc-field-group">
      <label for="mce-MMERGE3">Message  <span class="asterisk">*</span>
    </label>
      <input type="text" defaultValue="" name="MMERGE3" class="required" id="mce-MMERGE3"/>
    </div>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" ></div>
        <div class="response" id="mce-success-response"></div>
      </div>    
        <div aria-hidden="true"><input type="text" name="b_f879c2a4846430ec3eb759afc_4c5d95752f" tabindex="-1" defaultValue=""/></div>
        <div class="clear"><input type="submit" defaultValue="Message" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
        </div>
    </form>
  </div>
    

  );
}
export default ContactForm;
