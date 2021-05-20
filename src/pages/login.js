import React from 'react';
import '../styles/pagesStyles/loginStyle.css'

function login (){
    return(
        <div className="userLogin">
            <h1 className="titleLogin">LOGIN</h1>
            <form>
                <div className="divForm">
                    <label>Usuário</label>
                    <input name="user" id="user" type="text" placeholder="user"></input>
                </div>
                <div className="divForm">
                    <label>Senha</label>
                    <input name="password" id="password" type="password" placeholder="password"></input>
                </div>

                <div id="bt">
                    <button className="buttonLogin">login</button>
                </div>
            </form>
        </div>
    )
}

export default login;