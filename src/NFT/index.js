import React from "react";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import "./index.css";

import a from "./images/0.png";
import b from "./images/1.png";
import c from "./images/2.png";
import d from "./images/3.png";
import e from "./images/4.png";
import f from "./images/5.png";
import g from "./images/6.png";
import h from "./images/7.png";
import i from "./images/8.png";


function NFT(){
    return(
        <div className="hero is-fullheight bg-sky">
            <div className="hero-body">
                <Atropos
                className="atropos-banner"
                highlight={false}
                onEnter={() => console.log("enter")}
                >
                    <img
                        className="atropos-banner-spacer"
                        src={a}
                        alt=""
                    />
                    <img
                        data-atropos-offset="-3"
                        src={b}
                        alt=""
                    />
                    <img
                        data-atropos-offset="-2"
                        src={c}
                        alt=""
                    />
                    <img
                        data-atropos-offset="-1"
                        src={d}
                        alt=""
                    />
                    <img
                        data-atropos-offset="0"
                        src={e}
                        alt=""
                    />
                    <img
                        data-atropos-offset="1"
                        src={f}
                        alt=""
                    />
                    <img
                        data-atropos-offset="2"
                        src={g}
                        alt=""
                    />
                    <img
                        data-atropos-offset="3"
                        src={h}
                        alt=""
                    />
                    <img
                        data-atropos-offset="4"
                        src={i}
                        alt=""
                    />
                </Atropos>
            </div>
        </div>
    )
}

export default NFT;