import React, { createRef } from 'react';

function FirstFormRow({
  gender,
  setGender,
  alerts,
  setAlerts,
  setFullName,
}) {
  const refMan = createRef();
  const refWoman = createRef();

  // Handler
  const manClicked = () => {
    const genderSelected = document.getElementById('genderSelected');
    const manDOM = refMan.current;
    const womanDOM = refWoman.current;

    if (!gender.man) {
      genderSelected.style.marginLeft = '0vw';

      womanDOM.style.color = '#FFFFFF';
      womanDOM.style.fontWeight = '400';

      manDOM.style.color = '#150E3A';
      manDOM.style.fontWeight = '700';

      setGender({
        man: true,
        woman: false,
      });
    }
  };

  const womanClicked = () => {
    const genderSelected = document.getElementById('genderSelected');
    const manDOM = refMan.current;
    const womanDOM = refWoman.current;
    const isPhone = window.matchMedia("only screen and (max-width: 767px)");
    
    if (!gender.woman) {
      if (isPhone.matches) {
        genderSelected.style.marginLeft = '37.5vw';
      } else {
        genderSelected.style.marginLeft = '161px';
      }

      manDOM.style.color = 'white';
      manDOM.style.fontWeight = '400';

      womanDOM.style.color = '#150E3A';
      womanDOM.style.fontWeight = '700';

      setGender({
        man: false,
        woman: true,
      });
    }
  };

  const nameOnChange = (e) => {
    let value = e.target.value.toUpperCase();
    if (!value.match(/^[a-zA-Z\s]+$/g)) {
      setAlerts({ ...alerts, fullName: '⚠️ Kamu hanya dapat input alfebet dan spasi' });
    } else if (value === '') {
      setAlerts({ ...alerts, fullName: '⚠️ Tidak boleh kosong' });
    } else {
      setAlerts({ ...alerts, fullName: '' });
    }
    setFullName(value);
  };

  // Render
  return (
    <div className="First">
      <div className="FullName">
        <div className="Title">
          <p id="text">Nama Lengkap</p>
          <p id="requirement">(required)</p>
        </div>
        <input type="text" name="" id="inpName" placeholder="John Doe" onChange={nameOnChange} />
        <p id="alert">{alerts.fullName}</p>
      </div>

      <div className="JenisKelamin">
        <div className="Title">
          <p id="text">Jenis Kelamin</p>
          <p id="requirement">(required)</p>
        </div>

        <div className="Box">
          <div id="genderSelected" />
          <div
            id="man"
            ref={refMan}
            role="presentation"
            onClick={() => manClicked()}
          >
            Laki-Laki
          </div>
          <div
            id="woman"
            ref={refWoman}
            role="presentation"
            onClick={() => womanClicked()}
          >
            Perempuan
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstFormRow;
