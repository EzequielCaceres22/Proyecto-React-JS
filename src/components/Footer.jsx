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
                            <li><a className="link-color" href="https://www.zooko.com.uy/nosotros" target='blank'>Nosotros</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/contacto" target='blank'>Contacto</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/tiendas" target='blank'>Tiendas</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/trabaja-con-nosotros" target='blank'>Trabaja en Zooko</a></li>
                        </ul>
                    </div>
                    <div class="col info-cls">
                        <ul>
                            <h5>Más Info</h5>
                            <li><a className="link-color" href="https://www.zooko.com.uy/cambios" target='blank'>Como Realizar Cambios</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/terminos-y-condiciones" target='blank'>Términos y Condiciones</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/como-comprar" target='blank'>Como Comprar</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/envios-y-devoluciones" target='blank'>Envios y devoluciones</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/preguntas-frecuentes" target='blank'>Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div class="col info-cls">
                        <ul>
                            <h5>Cuenta</h5>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar" target='blank'>Mi cuenta</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar" target='blank'>Mis compras</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar" target='blank'>Mis direcciones</a></li>
                            <li><a className="link-color" href="https://www.zooko.com.uy/ingresar" target='blank'>Wish List</a></li>
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