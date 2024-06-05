
import PropTypes from "prop-types";
import React from "react";
import { ArrowRightToBracket } from "../../icons/ArrowRightToBracket";
import { BarsOutline } from "../../icons/BarsOutline";
import { Grid } from "../../icons/Grid";
import { Plus } from "../../icons/Plus";
import { User } from "../../icons/User";
import { Users1 } from "../../icons/Users1";
import "./style.css";


export const Property = ({ users1Color = "white" }) => {
  return (
    <div className="property">
      <div className="sidebar-free">
        <div className="content">
          <div className="main">
            <div className="jobez-word-mark">
              <div className="overlap-group">
              <a href="https://www.aroundentgroup.com/about" className="text-wrapper">JobEZ</a>
              </div>
            </div>
            <div className="frame">
              <div className="list-wrapper">
                <div className="list">
                  <div className="items">
                    <div className="list-item">
                      <div className="div">
                        <Grid className="icon-instance-node" color="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-wrapper">
                <div className="items-wrapper">
                  <div className="items-2">
                    <div className="content-wrapper">
                      <div className="content-2">
                         <Plus className="icon-instance-node"/>
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="content-2">
                        <BarsOutline className="icon-instance-node" color="white"/>
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="content-2">
                        <Users1 className="icon-instance-node" color={users1Color} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-wrapper">
                <div className="div-wrapper">
                  <div className="items-3">
                    <div className="content-wrapper">
                      <div className="div">
                        <User className="icon-instance-node" />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <div className="div">
                        <ArrowRightToBracket className="icon-instance-node" color="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Property.propTypes = {
  users1Color: PropTypes.string,
};

