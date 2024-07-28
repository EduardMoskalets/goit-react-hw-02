import css from "./Description.module.css";

export default function Descrition() {
    return (
        <div>
            <h1 className={css.descript_title}>Sip Happens Café</h1>
            <p className={css.descript_text}>
                Please leave your feedback about our service by selecting one of the
                options below.
            </p>
        </div>
    );
}