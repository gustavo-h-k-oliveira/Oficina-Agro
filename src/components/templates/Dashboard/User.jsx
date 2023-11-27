import React from "react";
import './User.css';
import image from '/workspace/Oficina-Agro/src/assets/images/user.png';
import image1 from '/workspace/Oficina-Agro/src/assets/images/user1.png';
import image2 from '/workspace/Oficina-Agro/src/assets/images/user2.png';
import image3 from '/workspace/Oficina-Agro/src/assets/images/user3.png';
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user-container">
            <img src={image} className="user-img" alt="Foto do usuário" />
            <h3 className="username">
                Diogo Yusuke
            </h3>
            <h4 className="occupation">
                Administrador da fazenda <span>AgroVerde</span>
            </h4>
            <div className="more-features">
                <p className="status">Online</p>
                <Link to="/confuguraçoes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M40.4791 27.0417C40.5624 26.3751 40.6249 25.7084 40.6249 25.0001C40.6249 24.2917 40.5624 23.6251 40.4791 22.9584L44.8749 19.5209C45.2707 19.2084 45.3749 18.6459 45.1249 18.1876L40.9582 10.9792C40.7082 10.5209 40.1457 10.3542 39.6874 10.5209L34.4999 12.6042C33.4166 11.7709 32.2499 11.0834 30.9791 10.5626L30.1874 5.04175C30.1249 4.54175 29.6874 4.16675 29.1666 4.16675H20.8332C20.3124 4.16675 19.8749 4.54175 19.8124 5.04175L19.0207 10.5626C17.7499 11.0834 16.5832 11.7917 15.4999 12.6042L10.3124 10.5209C9.83324 10.3334 9.29158 10.5209 9.04158 10.9792L4.87491 18.1876C4.60408 18.6459 4.72908 19.2084 5.12491 19.5209L9.52074 22.9584C9.43741 23.6251 9.37491 24.3126 9.37491 25.0001C9.37491 25.6876 9.43741 26.3751 9.52074 27.0417L5.12491 30.4792C4.72908 30.7917 4.62491 31.3542 4.87491 31.8126L9.04158 39.0209C9.29158 39.4792 9.85408 39.6459 10.3124 39.4792L15.4999 37.3959C16.5832 38.2292 17.7499 38.9167 19.0207 39.4376L19.8124 44.9584C19.8749 45.4584 20.3124 45.8334 20.8332 45.8334H29.1666C29.6874 45.8334 30.1249 45.4584 30.1874 44.9584L30.9791 39.4376C32.2499 38.9167 33.4166 38.2084 34.4999 37.3959L39.6874 39.4792C40.1666 39.6667 40.7082 39.4792 40.9582 39.0209L45.1249 31.8126C45.3749 31.3542 45.2707 30.7917 44.8749 30.4792L40.4791 27.0417ZM24.9999 32.2917C20.9791 32.2917 17.7082 29.0209 17.7082 25.0001C17.7082 20.9792 20.9791 17.7084 24.9999 17.7084C29.0207 17.7084 32.2916 20.9792 32.2916 25.0001C32.2916 29.0209 29.0207 32.2917 24.9999 32.2917Z" fill="black"/>
                    </svg>
                </Link>
            </div>
            <div className="messages">
                <div className="message">
                    <img src={image1} className="user-message" alt="Foto do usuário" />
                    <div className="user-info">
                        <div className="info1">
                            <h5>
                                Antônio Carlos
                            </h5>
                        </div>
                        <p className="text-message">
                            Chefe, preciso de novas peças para manutenção
                        </p>
                    </div>
                </div>
                <div className="message">
                    <img src={image2} className="user-message" alt="Foto do usuário" />
                    <div className="user-info">
                    <div className="info1">
                            <h5>
                                Carolina Tanaka
                            </h5>
                        </div>
                        <p className="text-message">
                            Já confirmei a compra dos insumos. Chegará na próxima ...
                        </p>
                    </div>
                </div>
                <div className="message">
                <img src={image3} className="user-message" alt="Foto do usuário" />
                    <div className="user-info">
                    <div className="info1">
                            <h5>
                                Jacinto Pinto
                            </h5>
                        </div>
                        <p className="text-message">
                            O trator da plantação de milho apresenta defeitos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};