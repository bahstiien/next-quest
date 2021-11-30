import { useState } from "react";
import Link from "next/link";

export default function TermsOfUse() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/terms"> Terms </Link>
      <h1> Terms </h1>
      <p>
        Logoden biniou degemer mat, an. Naet kreskiñ amzer dija, vered. Chaseour
        mantell skeud ziskouez, grizilh. Dro dougen bale doñjer, al. Pri drezout
        gouelañ votez, leziregezh. Koustañ gwazh elgez Pederneg, amprevan.
        Werenn er drezi c’haod, Gwengamp. Kichen Gwengamp laouen marennañ,
        kerzhout. Gouiziek harp tasenn birviñ, pobl. Plijet biskoazh montr daol,
        roc’h.
      </p>
      <label htmlFor="checkbox"> Agree ? </label>
      <input
        id="checkbox"
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <button
        type="button"
        onClick={() => {
          {
            alert("Well done ");
          }
        }}
      >
        <p> OK </p>
      </button>
    </div>
  );
}
