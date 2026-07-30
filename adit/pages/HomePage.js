import { Page } from "../components/Page.js";
export	class	HomePage extends	Page	{
    renderContent()	{
        return	`
        <main>
            <h1>Selamat	Datang	di	Website	Sekolah</h1>
            <p>Ini	adalah	halaman	utama	(Home)	dari	website	sekolah	kami.</p>
        </main>
        `;
    }
}