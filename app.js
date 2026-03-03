document.addEventListener('DOMContentLoaded', () => {
    
    const svgs = {
        'genshin': 'M12.004.053A11.96 11.96 0 0 0 .044 12.012a11.96 11.96 0 0 0 11.96 11.961h.001a11.96 11.96 0 0 0 11.956-11.96A11.956 11.956 0 0 0 12.004.053zm.006 20.372c-2.023 0-3.927-.723-5.418-1.957-.008-.008-.009-.015-.015-.022l4.897-4.887h.001c.148.147.349.239.57.239.449 0 .814-.366.814-.814 0-.448-.365-.812-.814-.812a.813.813 0 0 0-.812.812c0 .22.091.42.239.569v.001l-4.708 4.71a8.423 8.423 0 0 1-2.903-5.405h2.825a.333.333 0 0 0 .333-.334v-1.144h-3.08A8.411 8.411 0 0 1 5.378 8.01l4.28 4.281v.001c-.146.148-.237.349-.237.569 0 .448.365.813.814.813.447 0 .813-.365.813-.813 0-.448-.366-.813-.813-.813a.81.81 0 0 0-.571.24h-.001L5.385 7.994a8.417 8.417 0 0 1 5.617-2.483l-.001 2.899a.333.333 0 0 0 .334.333h1.144v-3.155a8.435 8.435 0 0 1 6.551 6.516h-2.316a.333.333 0 0 0-.333.334v1.144h2.247c-.503 3.518-3.017 6.425-6.386 7.394v-3.711a.333.333 0 0 0-.333-.334h-1.144v4.067c-.255.034-.515.053-.781.053z',
        'telegram': 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
        'spotify': 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
        'netflix': 'M17.5 2H6.5C5.1 2 4 3.1 4 4.5v15c0 1.4 1.1 2.5 2.5 2.5h11c1.4 0 2.5-1.1 2.5-2.5v-15c0-1.4-1.1-2.5-2.5-2.5zm-5 13l-3-4h2v4h2v-6h-2l-3 4h2v-4h-2v6z',
        'unipay': 'M12 2l8 4-8 4-8-4 8-4zm0 6l8 4-8 4-8-4 8-4zm0 6l8 4-8 4-8-4 8-4z',
        'psn': 'M23.66 11.88c-1.1-.35-4.47-1.37-4.47-1.37.12-2.76-1.18-4.43-1.18-4.43s.71 2.17 2.35 2.75l-3.37-1.02c-.63-2.28-2.2-3.57-2.2-3.57s1.41 1.81 1.96 3.3l-3.1-1c-1.65-.51-3.18.63-3.18.63l4.32 1.33s-2.2 2.67-.79 3.1l-2.95-1s-1.41.79-1.61 1.85c-.08.27 0 .47.12.55l4.05 1.25s-3.26 2.44-2.16 2.79c.47.16 1.06.08 1.77-.24l-.55 1.26s-.39 1.1 1.02 1.53c1.69.51 5.1.87 8.95.16 2.08-.39 3.26-1.3 3.26-1.3s-1.18.47-3.14.63l1.57-.43c1.89-.51 2.08-2 2.08-2s-1.1.47-2.55.31l4.71-1.3c.99-.28 1.42-1.22 1.42-1.22s-2.28.91-4.79.32l3.65-1.02c.71-.23.86-.86.86-.86zM18.59 12.16c-.39.43-.9.63-1.49.75-1.02.2-3.22-.35-5.46-1.02s-3.81-1.49-3.49-2.55c.12-.43.47-.71.9-.83.86-.24 2.59-.08 5.18.71s4.83 2.32 4.36 2.94z',
        'chatgpt': 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.988-2.9001 6.0922 6.0922 0 0 0-.7378-7.073zm-9.022 12.108a4.3636 4.3636 0 0 1-2.7663-.9869l.1147-.0661 4.5422-2.6247a.7845.7845 0 0 0 .3931-.6767v-6.6033l2.0511 1.1856a.042.042 0 0 1 .0208.0366v5.334a4.354 4.354 0 0 1-4.3556 4.3989v-.0014h.0001zM4.1444 18.0673a4.373 4.373 0 0 1-.5811-2.8856l.1147.0666 4.5422 2.6242a.7836.7836 0 0 0 .7826 0l5.7176-3.3033v2.3687a.042.042 0 0 1-.0208.0366l-4.619 2.6681a4.3636 4.3636 0 0 1-5.936-1.5724zM2.8441 7.2185a4.3636 4.3636 0 0 1 2.1855-1.8953v.1326l-.0014 5.2475a.785.785 0 0 0 .3927.6763l5.719 3.3033-2.0515 1.1856a.0425.0425 0 0 1-.0416 0L4.4286 13.2a4.3587 4.3587 0 0 1-1.584-5.9839zm16.9038 9.5303a4.373 4.373 0 0 1-2.1855 1.8953v-.133l.0014-5.2465a.7845.7845 0 0 0-.3926-.6763L11.451 9.2845l2.0515-1.1856a.0425.0425 0 0 1 .0416 0l4.619 2.6676a4.3587 4.3587 0 0 1 1.584 5.9825zm.0754-7.469a4.3636 4.3636 0 0 1 .5811 2.8856l-.1147-.0661-4.5422-2.6247a.7836.7836 0 0 0-.7826 0L9.4436 12.748v-2.3687a.042.042 0 0 1 .0208-.0366l4.619-2.6681a4.354 4.354 0 0 1 5.74 1.6033zM10.74 5.0743a4.3587 4.3587 0 0 1 7.1216 2.5593l-.1142.0661-4.5422 2.6247a.783.783 0 0 0-.3931.6767v6.6033l-2.051-1.1856a.042.042 0 0 1-.0208-.0366v-5.334a4.354 4.354 0 0 1 4.0001-5.9734zm1.2599 3.8687l3.6667 2.1158-3.6667 2.1158-3.6667-2.1158z',
        'steam': 'M12 0C5.36 0 0 5.36 0 12c0 4.6 2.59 8.61 6.45 10.74l1.83-5.32c-.08-.34-.12-.7-.12-1.07 0-2.48 2.01-4.5 4.5-4.5 1.56 0 2.92.79 3.74 2l4.63-2.73c.05-.24.07-.49.07-.75 0-2.48-2.01-4.5-4.5-4.5-2.05 0-3.77 1.36-4.32 3.23l-2.62 1.13c-.43-1.28-1.64-2.21-3.09-2.21-1.79 0-3.25 1.45-3.25 3.25 0 .61.17 1.19.47 1.67L1.62 18.06A11.98 11.98 0 0 1 0 12C0 5.36 5.36 0 12 0zm.65 14.12c-.6.22-1.23.33-1.86.33-2.01 0-3.72-1.28-4.3-3.08l2.31-1c.29 1.1 1.3 1.9 2.5 1.9 1.42 0 2.58-1.15 2.58-2.57 0-1.42-1.16-2.58-2.58-2.58-1.42 0-2.58 1.16-2.58 2.58 0 .13.01.25.03.38l-2.08.9A4.5 4.5 0 0 1 12.08 5.5c2.48 0 4.5 2.01 4.5 4.5s-2.02 4.5-4.5 4.5c-.28 0-.55-.03-.82-.09z',
        'epic': 'M12.001 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm4.332 17.558h-8.086c-1.503 0-2.613-1.047-2.613-2.67v-6.321h2.51v5.773c0 .504.281.713.805.713h7.384v2.505zm0-9.987h-5.021v-2.262h5.021v2.262z',
        'yandex': 'M14.636 1.48c2.956 0 5.188 2.074 5.188 5.253 0 3.018-1.503 4.542-4.103 6.012l-3.376 1.884L15.341 22.8H10.15l-2.458-6.953-3.61 2.04v-4.321l5.228-2.923c1.78-1.002 2.658-1.872 2.658-3.414 0-1.432-1.003-2.271-2.433-2.271-1.416 0-2.394.945-2.394 2.371h-4.32c0-3.361 2.87-5.85 6.815-5.85z',
        'vk': 'M15.073 2c3.923 0 5.885 0 7.106 1.22C23.4 4.442 23.4 6.404 23.4 10.327v3.346c0 3.923 0 5.885-1.221 7.106C20.958 22 18.996 22 15.073 22H8.927c-3.923 0-5.885 0-7.106-1.22C.6 19.558.6 17.596.6 13.673v-3.346C.6 6.404.6 4.442 1.821 3.22 3.042 2 5.004 2 8.927 2h6.146zm-2.185 14.509c3.085 0 3.193-2.187 3.193-2.187v-1.127s-.027-1.393.633-1.638c.645-.24 1.474.965 2.33 1.545.962.65 1.637.525 1.637.525l3.284-.045s1.72-.107.905-1.458c-.066-.11-.47-1.025-2.424-2.827-2.043-1.884-1.771-1.579.68-4.852 1.492-1.992 2.088-3.207 1.898-3.73-.182-.5-.811-.461-1.49-.461l-3.708.02s-.273-.036-.48.087c-.201.118-.333.393-.333.393s-.585 1.545-1.365 2.87c-1.646 2.793-2.306 2.94-2.57 2.77-.597-.384-.447-1.545-.447-2.37 0-2.571.39-3.642-.765-3.92-.384-.093-.666-.153-1.65-.16-1.265-.01-2.337.006-2.934.3-.4.195-.705.63-.518.653.232.028.756.143 1.035.52.358.487.345 1.583.345 1.583s.197 3.015-.494 3.392c-.473.257-1.12-.267-2.51-2.673-.706-1.222-1.24-2.568-1.24-2.568s-.1-.252-.284-.383c-.22-.158-.528-.207-.528-.207l-3.527.02s-.529.014-.72.247c-.17.208-.013.633-.013.633s2.747 6.425 5.86 9.673c2.85 2.972 6.104 2.822 6.104 2.822z',
        'rust': 'M12.015 23.368c-1.503.493-4.322.613-6.195.03-2.619-.824-4.524-2.993-5.324-5.632-.472-1.565-.544-3.538-.076-5.466C1.127 9.467 2.651 6.83 5.097 5.176 6.55 4.192 8.528 3.5 10.334 3.32v3.744h3.359v-3.74c1.821.196 3.784.887 5.23 1.886 2.454 1.666 3.984 4.316 4.675 7.152.457 1.88.384 3.868-.077 5.435-1.042 3.543-3.921 6.066-7.502 6.571v-4.102h-4.004v4.102zm.004-6.38a4.986 4.986 0 0 0 4.984-4.987 4.986 4.986 0 0 0-4.984-4.985 4.986 4.986 0 0 0-4.986 4.985 4.986 4.986 0 0 0 4.986 4.987zm6.756-11.44a10.957 10.957 0 0 0-3.359-2.14V.632h-6.804V3.41A10.963 10.963 0 0 0 5.236 5.56l-1.996-1.996-4.811 4.812 1.995 1.996a10.942 10.942 0 0 0-.783 3.978H-.001v6.804h3.642a10.954 10.954 0 0 0 1.604 3.524L3.25 26.671l4.812-4.812 2.014-2.014c.642.146 1.298.223 1.955.223.65 0 1.3-.075 1.936-.217l4.026 4.027 4.812-4.812-1.996-1.996c1.077-.96 1.983-2.138 2.664-3.46h2.894v-6.804H23.36a10.955 10.955 0 0 0-2.593-4.248z',
        'discord': 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'
    };

    const bankBINs = [
        { prefixes: ['4276','4279','5469','220220'], bg: 'from-green-500 to-emerald-700', name: 'Сбербанк', tag: 'СБ', logo: 'ph-leaf', txt: 'text-white' },
        { prefixes: ['4377','5189','5213','5536','220224'], bg: 'from-[#FFDD2D] to-[#F59E0B]', name: 'Т-Банк', tag: 'Т', logo: 'ph-bank', txt: 'text-black' },
        { prefixes: ['4154','4584','5154','5559','220015'], bg: 'from-red-600 to-red-800', name: 'Альфа-Банк', tag: 'А', logo: 'ph-lightning', txt: 'text-white' },
        { prefixes: ['22'], bg: 'from-green-500 to-blue-600', name: 'МИР', tag: 'MIR', logo: 'ph-credit-card', txt: 'text-white' },
        { prefixes: ['4'], bg: 'from-[#1A1F71] to-[#00579F]', name: 'Visa', tag: 'VISA', logo: 'ph-credit-card', txt: 'text-white' },
        { prefixes: ['5'], bg: 'from-gray-800 to-gray-900', name: 'Mastercard', tag: 'MC', logo: 'ph-credit-card', txt: 'text-white' }
    ].sort((a,b) => b.prefixes[0].length - a.prefixes[0].length);

    window.app = {
        state: {
            user: { name: "Тимофей", purpose: "Разработчик", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Timofey&backgroundColor=06b6d4", theme: "neon" },
            balance: 15400,
            chartData: [500, 1200, 3000, 800, 2500, 1000, 0],
            cards: [
                { id: 1, name: "Т-Банк", num: "4377111122224455", color: "from-[#FFDD2D] to-[#F59E0B]", txt: "text-black", tag: 'Т', logo: 'ph-bank', balance: "4 200 ₽", isMain: true },
                { id: 2, name: "Сбербанк", num: "4276333344441234", color: "from-green-500 to-emerald-700", txt: "text-white", tag: 'СБ', logo: 'ph-leaf', balance: "11 200 ₽" }
            ],
            transactions: [
                { id: 101, title: "Steam Global", amount: -1500, time: "Сегодня, 14:20", icon: "ph-game-controller", color: "text-red-400" },
                { id: 102, title: "Пополнение", amount: 5000, time: "Вчера, 09:00", icon: "ph-wallet", color: "text-emerald-400" },
                { id: 103, title: "Spotify Premium", amount: -199, time: "28 Фев, 11:30", icon: "ph-spotify-logo", color: "text-red-400" }
            ],
            subs: [
                { id: 1, iconId: 'spotify', name: "Spotify Premium", price: 199, active: true, brandColor: '#1DB954' },
                { id: 2, iconId: 'netflix', name: "Netflix", price: 899, active: false, brandColor: '#E50914' },
                { id: 3, iconId: 'telegram', name: "Telegram Premium", price: 299, active: true, brandColor: '#24A1DE', isSystem: true }
            ],
            catalog: [
                { id: 'steam', image: 'steam.PNG', iconId: 'steam', name: "Steam", desc: "Игры", provider: "Steam", brandColor: '#171A21' },
                { id: 'epic', image: 'epic.PNG', iconId: 'epic', name: "Epic Games", desc: "V-Bucks", provider: "Epic Games", brandColor: '#2A2A2A' },
                { id: 'genshin', iconId: 'genshin', name: "Genshin Impact", desc: "Кристаллы", provider: "HoYoverse", brandColor: '#4B5364' },
                { id: 'rust', image: 'rust.PNG', iconId: 'rust', name: "Rust", desc: "Скины / Сервера", provider: "Facepunch", brandColor: '#CE422B' },
                { id: 'psn', iconId: 'psn', name: "PS Store (TR)", desc: "Игры", provider: "Sony", brandColor: '#003791' },
                { id: 'discord', image: 'discord.PNG', iconId: 'discord', name: "Discord Nitro", desc: "Подписки", provider: "Discord", brandColor: '#5865F2' },
                { id: 'chatgpt', iconId: 'chatgpt', name: "ChatGPT Plus", desc: "AI Сервисы", provider: "OpenAI", brandColor: '#10A37F' }
            ],
            chartInstance: null, currentPayService: null, isOauthAuthorized: false
        },

        init() {
            this.changeTheme(this.state.user.theme); 
            this.updateUserUI();
            this.renderAll();
            
            const subDb = document.getElementById('sub-db');
            if(subDb) {
                subDb.addEventListener('change', (e) => {
                    document.getElementById('sub-custom-fields').style.display = e.target.value === 'custom' ? 'block' : 'none';
                });
            }

            // Инициализируем VanillaTilt только для ПК/Планшетов (убираем лаги тачскрина)
            setTimeout(() => {
                if (window.innerWidth > 768 && typeof VanillaTilt !== 'undefined') {
                    const authCard = document.querySelector('#auth-screen .glass-card');
                    if (authCard) VanillaTilt.init(authCard, { max: 5, speed: 400, glare: true, "max-glare": 0.2 });
                }
            }, 500);
        },

        startApp() {
            const auth = document.getElementById('auth-screen');
            const appUi = document.getElementById('app-screen');
            auth.style.opacity = '0'; auth.style.pointerEvents = 'none';
            setTimeout(() => { 
                auth.style.display = 'none'; 
                appUi.classList.remove('hidden'); 
                void appUi.offsetWidth; // Force reflow
                appUi.classList.remove('opacity-0'); 
                this.init(); 
            }, 500);
        },

        renderAll() {
            document.getElementById('main-balance').innerText = this.state.balance.toLocaleString('ru-RU');
            this.renderCards(); this.renderTransactions(); this.renderCatalog(); this.renderSubs(); this.renderChart(); this.updateSelectors();
        },

        changeTheme(theme) {
            this.state.user.theme = theme; document.body.className = `theme-${theme}`; document.getElementById('set-theme').value = theme;
            if(this.state.chartInstance) this.renderChart();
        },

        updateUserUI() {
            document.getElementById('ui-user-name').innerText = this.state.user.name;
            document.getElementById('ui-user-purpose').innerText = this.state.user.purpose;
            document.getElementById('ui-user-avatar').src = this.state.user.avatar;
            document.getElementById('settings-avatar-preview').src = this.state.user.avatar;
            document.getElementById('set-name').value = this.state.user.name;
            document.getElementById('set-purpose').value = this.state.user.purpose;
        },

        handleAvatarUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => { this.state.user.avatar = event.target.result; document.getElementById('settings-avatar-preview').src = this.state.user.avatar; };
                reader.readAsDataURL(file);
            }
        },

        saveSettings() {
            this.state.user.name = document.getElementById('set-name').value || "User";
            this.state.user.purpose = document.getElementById('set-purpose').value;
            this.updateUserUI(); this.closeModal('settings-modal'); this.showToast('Настройки сохранены', 'success');
        },

        showToast(message, type = 'success') {
            const container = document.getElementById('toast-container'); const toast = document.createElement('div');
            const colors = { success: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 ph-check-circle', error: 'bg-red-500/20 border-red-500/50 text-red-400 ph-warning-circle', info: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400 ph-info' };
            const cfg = colors[type] || colors.info;
            toast.className = `toast glass-card !rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 pointer-events-auto ${cfg.split(' ').slice(0,2).join(' ')}`;
            toast.innerHTML = `<i class="ph-fill ${cfg.split(' ')[2]} text-xl md:text-2xl"></i> <span class="text-white text-xs md:text-sm font-medium">${message}</span>`;
            container.appendChild(toast); setTimeout(() => toast.classList.add('show'), 10); setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
        },

        handleCardInput(input) {
            let val = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formatted = val.match(/.{1,4}/g)?.join(' ') || val; input.value = formatted;
            const preview = document.getElementById('new-card-preview'); const pBank = document.getElementById('preview-bank'); const pLogo = document.getElementById('preview-logo'); const pNum = document.getElementById('preview-num');
            pNum.innerText = formatted || "**** **** **** ****";
            let config = { bg: "from-gray-800 to-gray-900", name: "Неизвестный банк", tag: '💳', logo: 'ph-credit-card', txt: "text-white" };
            if (val.length >= 1) { for (const bank of bankBINs) { if (bank.prefixes.some(p => val.startsWith(p))) { config = bank; break; } } }
            preview.className = `w-full h-40 md:h-48 rounded-[16px] md:rounded-[20px] mb-6 md:mb-8 p-4 md:p-6 flex flex-col justify-between transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden bg-gradient-to-br ${config.bg} ${config.txt}`;
            pBank.innerText = config.name; pBank.className = `font-bold text-white text-[10px] md:text-sm uppercase tracking-widest opacity-90 drop-shadow-md ${config.txt}`;
            pNum.className = `font-mono text-lg md:text-[22px] tracking-[0.15em] md:tracking-[0.25em] text-white mt-auto mb-1 md:mb-2 drop-shadow-md relative z-10 ${config.txt}`;
            pLogo.innerHTML = `<i class="ph-fill ${config.logo} text-2xl md:text-3xl ${config.txt}"></i>`;
            input.dataset.bank = config.name; input.dataset.color = config.bg; input.dataset.txt = config.txt; input.dataset.tag = config.tag; input.dataset.logo = config.logo;
        },

        addCard() {
            const input = document.getElementById('new-card-num'); const num = input.value.replace(/\s/g, '');
            if(num.length < 16) return this.showToast("Введите полные 16 цифр", "error");
            this.state.cards.push({ id: Date.now(), name: input.dataset.bank || "Банк", num: num, balance: "0 ₽", color: input.dataset.color || "from-gray-800 to-gray-900", txt: input.dataset.txt || "text-white", tag: input.dataset.tag || '💳', logo: input.dataset.logo || "ph-credit-card" });
            this.renderAll(); this.closeModal('add-card-modal'); input.value = ''; this.handleCardInput(input); this.showToast(`Карта успешно привязана`, 'success');
        },

        renderCards() {
            const list = document.getElementById('cards-list'); list.innerHTML = '';
            this.state.cards.forEach(card => {
                const tag = card.isMain ? '<span class="absolute top-3 right-3 md:top-4 md:right-4 text-[8px] md:text-[10px] bg-white/20 text-white font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded backdrop-blur-md">MAIN</span>' : '';
                list.innerHTML += `
                    <div class="card-3d-item min-w-[220px] md:min-w-[260px] h-[130px] md:h-[160px] bg-gradient-to-br ${card.color} rounded-xl md:rounded-2xl p-4 md:p-5 relative ${card.txt} flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/20 snap-center">
                        ${tag}
                        <div class="flex justify-between items-start z-10"><i class="ph-fill ${card.logo} text-2xl md:text-3xl opacity-80"></i><i class="ph-fill ph-wifi-high text-lg md:text-xl opacity-60"></i></div>
                        <div class="z-10">
                            <div class="font-mono text-base md:text-xl tracking-[0.15em] md:tracking-[0.2em] mb-0.5 md:mb-1 opacity-90">•••• ${card.num.slice(-4)}</div>
                            <div class="flex justify-between items-end"><span class="font-bold text-[10px] md:text-sm opacity-80 uppercase tracking-widest">${card.name}</span><span class="font-heading font-bold text-sm md:text-lg">${card.balance}</span></div>
                        </div>
                    </div>`;
            });
            
            // Инициализируем VanillaTilt только для ПК/Планшетов (убираем лаги тачскрина)
            if(window.innerWidth > 768 && typeof VanillaTilt !== 'undefined') { 
                VanillaTilt.init(document.querySelectorAll(".card-3d-item"), { max: 10, speed: 400, glare: true, "max-glare": 0.3 }); 
            }
        },

        renderTransactions() {
            const list = document.getElementById('transactions-list'); list.innerHTML = '';
            this.state.transactions.forEach(t => {
                const sign = t.amount > 0 ? '+' : '';
                list.innerHTML += `
                    <div class="glass-static p-2 md:p-3 flex justify-between items-center hover:bg-white/5 transition rounded-xl">
                        <div class="flex items-center gap-2 md:gap-3">
                            <div class="w-8 h-8 md:w-10 md:h-10 bg-[var(--surface-hover)] rounded-lg md:rounded-xl flex items-center justify-center border border-[var(--border)]"><i class="ph-fill ${t.icon} text-base md:text-xl text-[var(--text-sec)]"></i></div>
                            <div><div class="font-bold text-xs md:text-sm text-[var(--text-main)]">${t.title}</div><div class="text-[8px] md:text-[10px] text-[var(--text-sec)] font-medium">${t.time}</div></div>
                        </div>
                        <div class="font-heading font-bold text-xs md:text-sm ${t.color}">${sign}${t.amount} ₽</div>
                    </div>`;
            });
        },

        updateSelectors() {
            const pSource = document.getElementById('pay-source'); const tSource = document.getElementById('trans-source');
            if(!pSource || !tSource) return;
            const balStr = `<option value="balance">Баланс (${this.state.balance.toLocaleString()} ₽)</option>`;
            pSource.innerHTML = balStr; tSource.innerHTML = balStr;
            this.state.cards.forEach(c => { const option = `<option value="${c.id}">${c.name} (••• ${c.num.slice(-4)})</option>`; pSource.innerHTML += option; tSource.innerHTML += option; });
        },

        processTopUp() {
            const amount = parseInt(document.getElementById('topup-amount').value);
            if(amount > 0) {
                this.state.balance += amount;
                this.state.transactions.unshift({ id: Date.now(), title: "Пополнение", amount: amount, time: "Только что", icon: "ph-wallet", color: "text-emerald-400" });
                if(this.state.transactions.length > 5) this.state.transactions.pop();
                this.renderAll(); this.closeModal('topup-modal'); this.showToast(`Зачислено ${amount} ₽`, 'success');
            }
        },

        processTransfer() {
            const source = document.getElementById('trans-source').value; const amount = parseInt(document.getElementById('trans-amount').value);
            if (source === 'balance') {
                if(amount > this.state.balance) return this.showToast("Недостаточно средств!", "error");
                this.state.balance -= amount;
                this.state.transactions.unshift({ id: Date.now(), title: "Перевод", amount: -amount, time: "Только что", icon: "ph-arrows-left-right", color: "text-red-400" });
                if(this.state.transactions.length > 5) this.state.transactions.pop();
            } else { this.showToast("Перевод выполняется через шлюз.", "info"); }
            this.addGraphHistory(amount); this.renderAll(); this.closeModal('transfer-modal');
            if (source === 'balance') this.showToast("Успешно переведено", 'success');
        },

        getLogoHTML(item) {
            let r = 0, g = 0, b = 0; const brandColor = item.brandColor || '#06B6D4';
            if (brandColor.length === 7) { r = parseInt(brandColor.slice(1, 3), 16); g = parseInt(brandColor.slice(3, 5), 16); b = parseInt(brandColor.slice(5, 7), 16); }
            const colorStart = `rgba(${r}, ${g}, ${b}, 1)`; const colorEnd = `rgba(${Math.max(0, r-30)}, ${Math.max(0, g-30)}, ${Math.max(0, b-30)}, 1)`;
            const shadow = `rgba(${r}, ${g}, ${b}, 0.65)`; const path = svgs[item.iconId] || svgs['unipay'];
            const fallbackSVG = `<div style="--brand-color-start: ${colorStart}; --brand-color-end: ${colorEnd}; --brand-shadow: ${shadow}; width: 100%; height: 100%; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; background-image: linear-gradient(to bottom right, var(--brand-color-start), var(--brand-color-end)); box-shadow: inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -2px 6px rgba(0,0,0,0.3), 0 8px 20px var(--brand-shadow);"><div style="position: absolute; top: 0; left: 0; right: 0; height: 40%; background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent); pointer-events: none;"></div><svg viewBox="0 0 24 24" style="width: 50%; height: 50%; fill: white; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); position: relative; z-index: 2;"><path d="${path}"/></svg></div>`;
            if (item.image) { return `<div class="premium-icon-container" style="position: relative; padding: 0; border: none; background: transparent; box-shadow: 0 4px 15px rgba(0,0,0,0.4);"><img src="./${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 14px; position: relative; z-index: 10;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><div style="display: none; width: 100%; height: 100%; position: absolute; top: 0; left: 0; border-radius: 12px;">${fallbackSVG}</div></div>`; }
            return `<div class="premium-icon-container">${fallbackSVG}</div>`;
        },

        renderCatalog() {
            const grid = document.getElementById('catalog-grid'); grid.innerHTML = '';
            this.state.catalog.forEach(item => {
                grid.innerHTML += `
                    <div onclick="app.initPayment('${item.id}')" class="glass-static card-interactive p-4 md:p-5 flex flex-col items-center justify-center transition-all duration-300 group">
                        <div class="mb-3 md:mb-4 group-hover:scale-110 transition duration-300">${this.getLogoHTML(item)}</div>
                        <div class="text-xs md:text-sm font-bold text-center truncate w-full">${item.name}</div>
                        <div class="text-[8px] md:text-[10px] text-[var(--text-sec)] text-center truncate w-full mt-0.5 md:mt-1 font-medium">${item.desc}</div>
                    </div>`;
            });
        },

        renderSubs() {
            const list = document.getElementById('subs-list'); list.innerHTML = '';
            this.state.subs.forEach(sub => {
                const opacity = sub.active ? '' : 'opacity-40 grayscale';
                const btnCls = sub.active ? 'border-red-500/30 text-red-500 hover:bg-red-500/10' : 'border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/10';
                const mainTag = sub.isSystem ? '<span class="text-[8px] md:text-[10px] text-[var(--primary)] font-bold bg-[var(--primary)]/10 px-1.5 md:px-2 py-1 md:py-1.5 rounded uppercase tracking-wider">Системная</span>' : `<button onclick="app.toggleSub(${sub.id})" class="btn-interactive text-[10px] md:text-xs font-bold border px-2 md:px-3 py-1 md:py-1.5 rounded-lg transition ${btnCls}">${sub.active ? 'Выкл' : 'Вкл'}</button>`;
                list.innerHTML += `
                    <div class="glass-static card-interactive p-3 md:p-4 flex items-center justify-between ${opacity} transition-all duration-300 group">
                        <div class="flex items-center gap-2 md:gap-4">
                            <div class="scale-75 md:scale-90 origin-left">${this.getLogoHTML(sub)}</div>
                            <div><div class="font-bold text-xs md:text-sm tracking-wide">${sub.name}</div><div class="text-[10px] md:text-xs font-bold text-[var(--primary)] mt-0.5">${sub.price} ₽ / мес</div></div>
                        </div>
                        <div>${mainTag}</div>
                    </div>`;
            });
        },

        openCustomPrompt() { document.getElementById('custom-prompt-input').value = "Мой сервис"; this.openModal('custom-prompt-modal'); },
        submitCustomPrompt() {
            const name = document.getElementById('custom-prompt-input').value;
            if(name) {
                const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                this.state.catalog.push({ id: 'custom_'+Date.now(), iconId: 'unipay', name: name, desc: "Произвольный платеж", provider: "API", brandColor: randomColor });
                this.renderCatalog(); this.closeModal('custom-prompt-modal');
            }
        },

        initPayment(serviceId) {
            const service = this.state.catalog.find(s => s.id === serviceId) || { iconId: 'unipay', name: 'Unknown', provider: 'Unknown', brandColor: '#000' };
            this.state.currentPayService = service; this.state.isOauthAuthorized = false;
            document.getElementById('pay-title').innerText = service.name;
            document.getElementById('pay-logo').innerHTML = this.getLogoHTML(service);
            document.getElementById('pay-balance-hint').innerText = `Доступно: ${this.state.balance.toLocaleString('ru-RU')} ₽`;
            document.getElementById('oauth-provider-name').innerText = service.provider;
            document.getElementById('oauth-status').innerText = "Требуется привязка";
            document.getElementById('oauth-status').classList.remove('text-[#10B981]');
            document.getElementById('btn-oauth-start').style.display = 'flex';
            document.getElementById('btn-process-pay').style.display = 'flex';
            document.getElementById('pay-success').classList.add('hidden');
            document.getElementById('pay-shield-zone').classList.add('hidden');
            this.switchPayTab('tab-id'); this.openModal('pay-modal');
        },

        switchPayTab(tabId) {
            document.querySelectorAll('#pay-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('#pay-modal .tab-content').forEach(c => c.classList.remove('active'));
            if(event) event.currentTarget.classList.add('active'); 
            document.getElementById(tabId).classList.add('active');
        },

        startOAuth() {
            const btn = document.getElementById('btn-oauth-start'); const loader = document.getElementById('oauth-loader'); const status = document.getElementById('oauth-status');
            btn.style.display = 'none'; loader.classList.remove('hidden'); status.innerText = `Соединение с ${this.state.currentPayService.provider}...`;
            setTimeout(() => {
                loader.classList.add('hidden'); status.innerHTML = `Успешно! <br><span class="text-[10px] md:text-xs text-white/70">Аккаунт: ${this.state.user.name}_Gaming</span>`;
                status.classList.add('text-[#10B981]'); this.state.isOauthAuthorized = true;
            }, 1500);
        },

        executePayment() {
            const source = document.getElementById('pay-source').value; const amount = parseInt(document.getElementById('pay-amount-input').value);
            const isOauthTab = document.getElementById('tab-login').classList.contains('active');
            if(isNaN(amount) || amount <= 0) return this.showToast("Введите корректную сумму", "error");
            if(isOauthTab && !this.state.isOauthAuthorized) return this.showToast("Сначала привяжите аккаунт!", "error");
            if (source === 'balance' && amount > this.state.balance) return this.showToast("Недостаточно средств!", "error");

            const btn = document.getElementById('btn-process-pay'); const shieldZone = document.getElementById('pay-shield-zone');
            const tokenDisplay = document.getElementById('pay-token-display'); const progressBar = document.getElementById('pay-progress');
            btn.style.display = 'none'; shieldZone.classList.remove('hidden'); tokenDisplay.classList.add('scramble-text');
            
            let progress = 0;
            const scrambleInterval = setInterval(() => {
                tokenDisplay.innerText = "TX-" + Math.random().toString(36).substring(2, 10).toUpperCase(); 
                progress += 4; progressBar.style.width = `${progress}%`;
                if (progress >= 100) { clearInterval(scrambleInterval); this.finishTransaction(amount, source); }
            }, 60);
        },

        finishTransaction(amount, source) {
            document.getElementById('pay-token-display').classList.remove('scramble-text'); document.getElementById('pay-token-display').innerText = "SUCCESS";
            setTimeout(() => {
                document.getElementById('pay-shield-zone').classList.add('hidden'); document.getElementById('pay-success').classList.remove('hidden');
                if(source === 'balance') this.state.balance -= amount;
                this.state.transactions.unshift({ id: Date.now(), title: this.state.currentPayService.name, amount: -amount, time: "Только что", icon: "ph-globe", color: "text-red-400" });
                if(this.state.transactions.length > 5) this.state.transactions.pop();
                this.addGraphHistory(amount); this.renderAll(); this.showToast(`Успешная оплата!`, 'success');
                setTimeout(() => this.closeModal('pay-modal'), 2000);
            }, 600);
        },

        toggleSub(id) { const sub = this.state.subs.find(s => s.id === id); if(sub) { sub.active = !sub.active; this.renderSubs(); } },

        addSub() {
            const dbVal = document.getElementById('sub-db').value; let iconId, name, price, brandColor;
            if (dbVal === 'custom') {
                iconId = 'unipay'; name = document.getElementById('sub-full-name').value; price = document.getElementById('sub-price').value;
                brandColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            } else { const parts = dbVal.split('|'); iconId = parts[0]; name = parts[1]; price = parts[2]; brandColor = "#" + Math.floor(Math.random()*16777215).toString(16); }
            if(!name || !price) return this.showToast("Заполните данные!", "error");
            this.state.subs.push({ id: Date.now(), iconId, name, price: parseInt(price), active: true, brandColor });
            this.renderSubs(); this.closeModal('add-sub-modal'); this.showToast(`Добавлена подписка`, 'success');
        },

        addGraphHistory(amount) { this.state.chartData[this.state.chartData.length - 1] += amount; },
        updateChartDate() { this.state.chartData = Array.from({length: 7}, () => Math.floor(Math.random() * 3000)); this.renderChart(); },

        renderChart() {
            const ctx = document.getElementById('spendChart').getContext('2d'); const style = getComputedStyle(document.body);
            const primaryColor = style.getPropertyValue('--primary').trim() || '#06B6D4';
            if(this.state.chartInstance) this.state.chartInstance.destroy(); 
            let gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, primaryColor.replace('rgb', 'rgba').replace(')', ', 0.3)')); gradient.addColorStop(1, 'rgba(0,0,0,0)');
            this.state.chartInstance = new Chart(ctx, {
                type: 'line',
                data: { labels: ['1', '2', '3', '4', '5', '6', '7'], datasets: [{ data: this.state.chartData, borderColor: primaryColor, backgroundColor: gradient, fill: true, borderWidth: 3, pointBackgroundColor: primaryColor, pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6, tension: 0.4 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false, beginAtZero: true }, x: { grid: { display: false }, ticks: { color: '#94A3B8', font: { family: 'Inter', weight: '600', size: 10 } } } } }
            });
        },

        openModal(id) { const m = document.getElementById(id); if(m) m.classList.add('active'); },
        closeModal(id) { const m = document.getElementById(id); if(m) m.classList.remove('active'); }
    };
});
