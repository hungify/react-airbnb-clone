import React from 'react';
import './style.css';
function MyLife(props) {
  return (
    <div className="wrapper__life">
      <div className="sky">
        <div className="sun"></div>
        <div class="icon">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>

        <div class="icon">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>

        <div class="icon">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>

        <div class="icon">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
        <div class="icon">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      </div>

      <div className="life">
        <div className="wrapper__road">
          <div className="wrapper__tree flex">
            <div className="tree tree1">&#127795;</div>
            <div className="tree tree2">&#127796;</div>
            <div className="tree tree3">&#127876;</div>
            <div className="tree tree3">&#127794;</div>
            <div className="tree tree3">&#127804;</div>
            <div className="tree tree3">&#127803;</div>
          </div>
          <div className="road">
            <div className="crossroads">
              <div className="crossroad"></div>
              <div className="crossroad"></div>
              <div className="crossroad"></div>
              <div className="crossroad"></div>
              <div className="crossroad"></div>
              <div className="crossroad"></div>
              <div className="crossroad"></div>
            </div>
            <div className=" me">&#128692;</div>
          </div>
          <div className="wrapper__tree flex">
            <div className="tree tree1">&#127795;</div>
            <div className="tree tree2">&#127796;</div>
            <div className="tree tree3">&#127876;</div>
            <div className="tree tree3">&#127794;</div>
            <div className="tree tree3">&#127804;</div>
            <div className="tree tree3">&#127803;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLife;
