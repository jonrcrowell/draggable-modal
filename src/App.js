import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Modal } from "antd";
import Draggable from "react-draggable";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const showModal = () => setVisible(true);

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <>
      <div className="description">
        Configurable modal that can be used to edit plans
        <ul>
          {" "}
          <li>
            draggable to expose supporting data that may be hidden beneath it
          </li>
          <li>mask behind to let user know it is in fact a modal</li>
          <li>
            mask opacity can be modified to allow underlying screen to be
            visible
          </li>
          <li>x to close in title bar can be hidden</li>
        </ul>
        <button onClick={showModal}>Open Modal</button>
      </div>
      <Modal
        title={
          <div
            style={{
              width: "100%",
              cursor: "move",
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            :: Draggable Modal
          </div>
        }
        maskStyle={{
          // styles for the mask
          opacity: "20%",
        }}
        bodyStyle={{
          /// styles for the modal body
          height: 800,
        }}
        closable={false} // allow closing of modal with x in title
        mask={true} // show a mask behind the modal
        maskClosable={false} // allow user to dismiss modal by clicking outside
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable disabled={disabled}>{modal}</Draggable>
        )}
      >
        <p>
          Bacon ipsum dolor amet strip steak ball tip tail ham, capicola flank
          shankle corned beef pig. Frankfurter turkey meatloaf, prosciutto
          pastrami sausage shank strip steak bresaola tail capicola shankle pork
          loin shoulder. Short ribs strip steak biltong ball tip, shankle
          buffalo burgdoggen chislic. Kielbasa beef ribeye, sirloin sausage
          leberkas alcatra andouille picanha tri-tip strip steak turducken
          swine. Corned beef ham hock strip steak, pork chop ribeye landjaeger
          boudin alcatra tenderloin salami chuck. Cow shoulder drumstick, ham
          hock brisket ground round porchetta spare ribs shankle turkey pork
          belly hamburger chicken pork chuck.
        </p>
        <p>
          Porchetta jowl bresaola chicken ground round. Sirloin buffalo leberkas
          chicken corned beef. Filet mignon shankle pork belly biltong sausage
          fatback short loin corned beef shoulder turkey alcatra. Ham hock
          venison chislic leberkas corned beef prosciutto sirloin filet mignon.
          Beef ground round tongue landjaeger. Tongue kielbasa drumstick,
          landjaeger brisket beef ham doner.
        </p>
        <p>
          Corned beef sausage spare ribs ham pork belly. Picanha corned beef
          turkey, meatball brisket tenderloin kevin. Salami shoulder corned beef
          andouille cupim. Chislic swine ham hock ball tip jowl kevin tongue
          pork bacon ground round. Andouille prosciutto corned beef, ribeye ham
          hock boudin frankfurter flank. Leberkas pork chop fatback, t-bone
          jerky ball tip kielbasa beef burgdoggen. Buffalo venison cupim bacon,
          turkey meatloaf prosciutto shankle fatback leberkas chuck brisket.
        </p>
      </Modal>
    </>
  );
};

export default App;
