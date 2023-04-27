import React from 'react'
import './Style.css'

function LoginPage() {
  return (
    <section className='container'>
      <div className='login-container'>
        <div className='mc-login-container'>
          <div className='row'>
            <img className="mc-logo" src="https://logincdn.msftauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" alt="Microsoft" />
          </div>

          <div className='row'>
            <div className='h1'>Connexion</div>
          </div>

          <input type="email" name="loginfmt" className="form-control ltr_override input ext-input text-box ext-text-box" placeholder="E-mail, téléphone ou Skype" />
          <input type="password" name="loginpwd" className="form-control ltr_override input ext-input text-box ext-text-box" placeholder="Mot de passe" />

          <div className="position-buttons password-reset-links-container ext-password-reset-links-container">
            <div className="row">
              <div className="col-md-24">
                <div className="text-13">
                  <div className="form-group">
                    Vous n'avez pas encore de compte&nbsp;?
                    <a href="" id="signup" className='text-blue'>
                      Créez-en un&nbsp;!
                    </a>
                  </div>

                  <div className="form-group text-blue">
                    <a href="#">Se connecter avec Windows Hello ou une clé de sécurité</a>
                    <span className="help-button" >
                      <img role="presentation" src="https://logincdn.msftauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-24 no-padding-left-right button-container button-field-container ext-button-field-container">
            <div className="inline-block button-item ext-button-item">
              <input type="submit" id="idSIButton9" className="win-button button_primary button ext-button primary ext-primary" value="Connexion"/>
            </div>
          </div>
        </div>

        <div className='other-login-container'>
          <img className="logo" src="https://logincdn.msftauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg" />
          <div>Options de connexion</div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage;
