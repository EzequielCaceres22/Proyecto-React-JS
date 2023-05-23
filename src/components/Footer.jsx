import React from 'react'
import BannerFooter from "../images/banner-footer.png"
import wpp from "../images/whatsapp.svg"
import fb from "../images/facebook.svg"
import tw from "../images/twitter.svg"
import yt from "../images/youtube.svg"
import pint from "../images/pinterest.svg"
import ig from "../images/instagram.svg"
import PayMethods from './PayMethods'


const Footer = () => {
    return (
        <div>
            <img className="bannerfot" src={BannerFooter} alt="" />
            <div className="footer">
                <div className="btn-div">
                    <button className="ul-stl"><img className="btn-ico"src={wpp} alt="" /></button>
                    <button className="ul-stl"><img className="btn-ico" src={fb}alt="" /></button>
                    <button className="ul-stl"><img className="btn-ico" src={tw} alt="" /></button>
                    <button className="ul-stl"><img className="btn-ico" src={yt}alt="" /></button>
                    <button className="ul-stl"><img className="btn-ico" src={pint} alt="" /></button>
                    <button className="ul-stl"><img className="btn-ico" src={ig} alt="" /></button>
                </div>
            

            <div class="container text-center div-info">
                <div class="row row-cols-4">
                    <div class="col info-cls">
                        <ul>
                            <h5>Zooko Store</h5>
                            <li><a className="link-color" href="https://www.zooko.com.uy/nosotros">Nosotros</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/contacto">Contacto</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/tiendas">Tiendas</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/trabaja-con-nosotros">Trabaja en Zooko</a></li>
                        </ul>
                    </div>
                    <div class="col info-cls">
                        <ul>
                            <h5>Más Info</h5>
                            <li><a className="link-color" href="https://www.zooko.com.uy/cambios">Como Realizar Cambios</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/terminos-y-condiciones">Términos y Condiciones</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/como-comprar">Como Comprar</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/envios-y-devoluciones">Envios y devoluciones</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/preguntas-frecuentes">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div class="col info-cls">
                        <ul>
                            <h5>Cuenta</h5>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar">Mi cuenta</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar">Mis compras</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar">Mis direcciones</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar">Wish List</a></li>
                        </ul>
                    </div>
                    <div class="col info-cls">
                        <h5>Newsletter</h5>
                        <p>¡Suscribite y recibí todas nuestras novedades!</p>
                        <input type="search" placeholder="Ingresa tu e-mail"/><button className="btn-sub"><b>SUSCRIBIRSE</b></button>
                    </div>
                    
                </div>
            </div>
            <PayMethods/>
            </div>
            
        </div>
)
}

export default Footer