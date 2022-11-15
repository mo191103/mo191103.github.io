"use strict";

/**
 * Configs
 */
var configs = (function () {
    var instance;
    var Singleton = function (options) {
        var options = options || Singleton.defaultOptions;
        for (var key in Singleton.defaultOptions) {
            this[key] = options[key] || Singleton.defaultOptions[key];
        }
    };
    Singleton.defaultOptions = {
        general_help: "Bah alors on galère ?\nBienvenue dans le menu d'aide.\nVoici les commandes disponibles.",
        ls_help: "Lister tous les fichiers présents dans ce dossier",
        sors_moi_de_la_help: "Quitter ce truc et avoir la solution.",
        sors_moi_de_la: "Alors non ? Tu te crois où ?.",
        cesar: "Mizvvgyn 7 mnma 2021 à 00:17\nFfwsbdz, Gz-sovib zfcrr aqgyree KwavaPbdvx uûveao kseeeeoq. Yen létèmm frrsfz li hdaydbé ijc iaéqqxrklr himj ue sdklznr WKO ijc mnnpecuau, em zfds zzbw lwe izzwzxn CYN uln jr ozslee\nczzwfwnrgtidnng ozèw dxcuz uezb oa nimk sazvqw.\nA'ji à gdbvv yeenwrenl ridspé ue qjkydnng zv NGP eg zv TGCX cjcv êkae fpz ul'rl cpqwjn l'bpdvza.\n\nBvzv gfadvvtidnng,\nIqgfuaf.\n\n\n--------------\nQwmo m'uaz oéréijtvjv. ******_******_****, pfas qz ase mifxwyib lr **_****_****\n\nKzstqavim éxrye ? Ezutcjcrm tij ntbdtij yae gm xvgtr zv kradnib pvb \"_\".",
        cesar_help:"",
        facture:"Belle trouvaille.\nEh merde...\nIl a approché MO via Leboncoin... On sait qu'ils avaient rendez-vous sur le parking d'auchan. Heureusement, on a réussi à trouver une photo de sa voiture en sortant du parking ! \nNous devons contacter un garagiste, envoyez nous la date de mise en circulation de son véhicule pour que l'on puisse obtenir plus d'informations. Entrez la au format **/**/****",
        facture_help:"",
        step3 : "Vous avancez particulièrement vite. Hop, votre premier cadeau est débloqué.\n On a creusé ce que vous nous avez donné.\nElle était visiblement admiratrice de Martin Luther King. On a trouvé un blog qu'elle aurait fait recémment. Une copie est disponible ici :\n https://mo191103.github.io/MLK_blog/\nContinuez d'enquêter",
        step3_help : "",
        lodeve : "Bien joué... MO aimait donc plutôt bien les legos... Interréssant mais ca ne nous aide pas beaucoup. On est en panne d'infos.\nElle doit bien avoir quelquechose quelque part sur elle. Trouvez une quelconque info à propos d'une rencontre avec Rémy. Nous pourrons peut-être en tirer quelquechose.",
        lodeve_help : "",
        dix_aout_04 : "Bingo ! Vous êtes vraiment douée !\nOn se rapproche de lui ...\nJ'ai l'impression qu'un deuxième cadeau vient d'être débloqué \nInterressant... La carte grise de son véhicule est au nom sa copine, Emma Roy.\n\nElle doit bien être sur les réseau sociaux.\nEntrez le nom du réseau social_son nom d'utilisateur\nExemple : facebook_jean.dupont",
        dix_aout_04_help : "",
        instagram:"Bonne piste !\nVous avez trouvé !\nBon... Nous avons pu nous procurer cette capture d'écran. Certaines informations sont manquantes mais vous devriez pouvoir retrouver ce qu'il nous faut.\nEntrez le nom du village où ils ont passés la nuit le soir de l'enlèvement.\nS'il comporte un trait d'union, gardez le.\nExemple : saint-nectaire", 
        instagram_help:"",
        christol : "Félicitations... On  touche au but, Rémy se trouve donc a Saint-Christol... Trouvez ce que cache ce charmant village. Envoyez nous l'altitude du lieu secret ou pourrait être retenue MO en mètres.\nAvec une carte IGN nous pourrons déterminer où se trouve MO.\nBon courage pour l'épreuve finale !",
        christol_help : "",
        last :" Wow ! Impressionnant... Je suis bluffé par votre professionalisme...\nVous venez tout simple de ... sauver l'humanité. Après un RAID de nos équipes, MO a été retrouvé saine et sauve... L'entreprise de rémy collaborait avec la DGSE pour aggraver le réchauffement climatique...\nRien a dire... Vous excellez dans votre domaine.\nCadeau 3/3 débloqué.\nLe monde vous remercie\nA bientôt.\n*fin de transmission*",
        last_help :"",
        cat_help: "Voir le contenu d'un fichier. cat <nom du fichier>",
        help_help: "Afficher ce menu.",
        clear_help: "Nettoyer le terminal.",
        reboot_help: "Redémarrer le système.",
        welcome: "Bievenue sur ton centre de contrôle\n\nTu es arrivée jusqu'ici c'est déjà pas mal... :)\nIl va falloir t'accrocher. Je sais, c'est pas beau mais tu vas devoir te coltiner ça un bon moment. Dis toi que je me tape des lignes blanches sur un fond noir toute la journée, tu auras peut-être un peu d'empathie désormais.",
        chal1: "Première étape ? Essayer de comprendre ce truc. Tape \"help\" et tu pourras voir toutes les commandes que tu pourras taper.",
        internet_explorer_warning: "NOTE: I see you're using internet explorer, this website won't work properly.",
        welcome_file_name: "",
        invalid_command_message: "<value>: command not found.",
        reboot_message: "Preparing to reboot...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
        permission_denied_message: "Unable to '<value>', permission denied.",
        usage: "Usage",
        file: "file",
        file_not_found: "Fichier '<value>' not found.",
        username: "Username",
        hostname: "Host",
        platform: "Platform",
        accesible_cores: "Accessible cores",
        language: "Language",
        value_token: "<value>",
        host: "localhost",
        user: "marine",
        is_root: false,
        type_delay: 20
    };
    return {
        getInstance: function (options) {
            instance === void 0 && (instance = new Singleton(options));
            return instance;
        }
    };
})();

/**
 * Your files here
 */
var files = (function () {
    var instance;
    var Singleton = function (options) {
        var options = options || Singleton.defaultOptions;
        for (var key in Singleton.defaultOptions) {
            this[key] = options[key] || Singleton.defaultOptions[key];
        }
    };
    Singleton.defaultOptions = {
        "welcome.txt": "Yep, c'est bien comme ca qu'on lit un fichier.",
        "marine.txt": "Coucou Marine, tu vas bien ?",
        "disparition.txt": "Une certaine MO est portée disparue...\nElle a été kidnappé à la sortie de la fashion week. Nous devons la retrouver car elle serait la seule à pouvoir sauver l'humanité de par son QI extrêmement élevé.\nQue sait-on d'elle ? Pas grand chose, elle est peu active sur les réseaux sociaux. Sa disparition survient alors qu'elle avait prévu d'annoncer un mystérieux projet qui\npourrait selon elle nous sauver du réchauffement climatique... Croyez moi, si vous la retrouvez, je saurais vous récompenser.\nNotre seule piste ? Un mot est tombé de la poche d'un de ses ravisseur. Le contenu de ce mot est dans message.txt\nIl est malheureusement chiffré.",
        "message.txt": "Hage pqhql wupzmbbqd YA. Bagd oq rmudq, mxxql xm otqdotqd m xm eadfuq pq xm rmetuaz iqqw qf dmYqzql xm mg xuqg bdqhg. Zage bAgddaze qzegufq x'qybqotqd pq eadfUd Eaz bdavqf. Vq egue egD cgQ Zage bagddaze Oazfuzgqd zAfdq naZ ngeuzqee FDmzcguxxqyqzf eu zage zQ x'mhaze bxge pmze xqe bmffqe.\nOq fqjfq qef oturrdq mhqo oéemd ymue om z'qef bme fdqe eéogdueé, bagd xm egufq vq oturrdqdmu mhqo xm hqdeuaz myqxuadéq pq oqemd mhqo xq ekefèyq pq oxq pq pqoturrdqyqzf qf zaz vgefq gz péomxmsq.\n\n\n----------\nFmbql \"oqemd\" bagd xm egufq",

    };
    return {
        getInstance: function (options) {
            instance === void 0 && (instance = new Singleton(options));
            return instance;
        }
    };
})();

var main = (function () {

    /**
     * Aux functions
     */
    var lastCommand = "";
    var isUsingIE = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);

    var ignoreEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    
    var scrollToBottom = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    
    var isURL = function (str) {
        return (str.startsWith("http") || str.startsWith("www")) && str.indexOf(" ") === -1 && str.indexOf("\n") === -1;
    };
    
    /**
     * Model
     */
    var InvalidArgumentException = function (message) {
        this.message = message;
        // Use V8's native method if available, otherwise fallback
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    };
    // Extends Error
    InvalidArgumentException.prototype = Object.create(Error.prototype);
    InvalidArgumentException.prototype.name = "InvalidArgumentException";
    InvalidArgumentException.prototype.constructor = InvalidArgumentException;

    var cmds = {
        LS: { value: "ls", help: configs.getInstance().ls_help },
        CAT: { value: "cat", help: configs.getInstance().cat_help },
        HELP: { value: "help", help: configs.getInstance().help_help },
        CLEAR: { value: "clear", help: configs.getInstance().clear_help },
        REBOOT: { value: "reboot", help: configs.getInstance().reboot_help },
        SORS_MOI_DE_LA: { value: "stop", help: configs.getInstance().sors_moi_de_la_help},
        CESAR: { value: "cesar", help: configs.getInstance().cesar_help},
        FACTURE: { value: "facture", help: configs.getInstance().facture_help},
        STEP3: { value: "martin_luther_king28_aout_1963", help: configs.getInstance().step3_help},
        LODEVE: { value: "lodeve", help: configs.getInstance().lodeve_help },
        DIX_AOUT_04: { value: "10/08/2004", help: configs.getInstance().dix_aout_04_help },
        INSTAGRAM: { value: "instagram_emma.roy__", help: configs.getInstance().instagram_help },
        CHRISTOL: { value: "saint-christol", help: configs.getInstance().christol_help },
        LAST: { value: "833", help: configs.getInstance().christol_help }
    };

    var Terminal = function (prompt, cmdLine, output, user, host, root, outputTimer) {
        if (!(prompt instanceof Node) || prompt.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + prompt + " for argument 'prompt'.");
        }
        if (!(cmdLine instanceof Node) || cmdLine.nodeName.toUpperCase() !== "INPUT") {
            throw new InvalidArgumentException("Invalid value " + cmdLine + " for argument 'cmdLine'.");
        }
        if (!(output instanceof Node) || output.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }


        (typeof user === "string" && typeof host === "string") && (this.completePrompt = user + "@" + host + ":~" + (root ? "#" : "$"));
        this.prompt = prompt;
        this.cmdLine = cmdLine;
        this.output = output;
        this.typeSimulator = new TypeSimulator(outputTimer, output);
    };

    Terminal.prototype.type = function (text, callback) {
        this.typeSimulator.type(text, callback);
    };

    Terminal.prototype.exec = function () {

        var command = this.cmdLine.value;
        this.cmdLine.value = "";
        this.prompt.textContent = "";
        this.output.innerHTML += "<span class=\"prompt-color\">" + this.completePrompt + "</span> " + command + "<br/>";
    };

    Terminal.prototype.init = function () {
        this.cmdLine.disabled = true;

        this.lock(); // Need to lock here since the sidenav elements were just added
        document.body.addEventListener("click", function (event) {

            this.focus();
        }.bind(this));
        this.cmdLine.addEventListener("keydown", function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.handleCmd();
                ignoreEvent(event);
            } else if (event.which === 9 || event.keyCode === 9) {
                //this.handleFill();
                ignoreEvent(event);
            }
        }.bind(this));
        this.reset();
    };

    Terminal.makeElementDisappear = function (element) {
        element.style.opacity = 0;
        element.style.transform = "translateX(-300px)";
    };

    Terminal.makeElementAppear = function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
    };

    
    Terminal.prototype.lock = function () {
        this.exec();
        this.cmdLine.blur();
        this.cmdLine.disabled = true;

    };

    Terminal.prototype.unlock = function () {
        this.cmdLine.disabled = false;
        this.prompt.textContent = this.completePrompt;

        scrollToBottom();
        this.focus();
    };

    Terminal.prototype.handleFill = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        if ((cmdComponents.length <= 1) || (cmdComponents.length === 2 && cmdComponents[0] === cmds.CAT.value)) {
            this.lock();
            var possibilities = [];
            if (cmdComponents[0].toLowerCase() === cmds.CAT.value) {
                if (cmdComponents.length === 1) {
                    cmdComponents[1] = "";
                }
                if (configs.getInstance().welcome_file_name.startsWith(cmdComponents[1].toLowerCase())) {
                    possibilities.push(cmds.CAT.value + " " + configs.getInstance().welcome_file_name);
                }
                for (var file in files.getInstance()) {
                    if (file.startsWith(cmdComponents[1].toLowerCase())) {
                        possibilities.push(cmds.CAT.value + " " + file);
                    }
                }
            } else {
                for (var command in cmds) {
                    if (cmds[command].value.startsWith(cmdComponents[0].toLowerCase())) {
                        possibilities.push(cmds[command].value);
                    }
                }
            }
            if (possibilities.length === 1) {
                this.cmdLine.value = possibilities[0] + " ";
                this.unlock();
            } else if (possibilities.length > 1) {
                this.type(possibilities.join("\n"), function () {
                    this.cmdLine.value = cmdComponents.join(" ");
                    this.unlock();
                }.bind(this));
            } else {
                this.cmdLine.value = cmdComponents.join(" ");
                this.unlock();
            }
        }
    };

    Terminal.prototype.handleCmd = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        this.lock();
        switch (cmdComponents[0]) {
            case cmds.SORS_MOI_DE_LA.value:
                this.sors_moi_de_la(cmdComponents);
                break;
            case cmds.CAT.value:
                this.cat(cmdComponents);
                break;
            case cmds.CESAR.value:
                this.cesar(cmdComponents);
                break;
            case cmds.STEP3.value:
                this.step3();
                break;
            case cmds.LS.value:
                this.ls();
                break;
            case cmds.LODEVE.value:
                this.lodeve();
                break;
            case cmds.DIX_AOUT_04.value:
                this.dix_aout_04();
                break;
            case cmds.INSTAGRAM.value:
                this.instagram();
                break;
            case cmds.FACTURE.value:
                this.facture();
                break;
            case cmds.CHRISTOL.value:
                this.christol();
                break;
            case cmds.LAST.value:
                this.last();
                break;
            case cmds.HELP.value:
                this.help();
                break;
            case cmds.CLEAR.value:
                this.clear();
                break;
            case cmds.REBOOT.value:
                this.reboot();
                break;          
            default:
                this.invalidCommand(cmdComponents);
                break;
        };
    };

    Terminal.prototype.cat = function (cmdComponents) {
        var result;
        lastCommand = cmds.CAT.value;
        if (cmdComponents.length <= 1) {
            result = configs.getInstance().usage + ": " + cmds.CAT.value + " <" + configs.getInstance().file + ">";
        } else if (!cmdComponents[1] || (!cmdComponents[1] === configs.getInstance().welcome_file_name || !files.getInstance().hasOwnProperty(cmdComponents[1]))) {
            result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
        } else {
            result = cmdComponents[1] === configs.getInstance().welcome_file_name ? configs.getInstance().welcome : files.getInstance()[cmdComponents[1]];
        }
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.ls = function () {
        lastCommand = cmds.LS.value;

        var result = ".\n..\n" + configs.getInstance().welcome_file_name + "\n";
        for (var file in files.getInstance()) {
            result += file + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.sors_moi_de_la = function () {
        lastCommand = cmds.SORS_MOI_DE_LA.value;
        var result = ".\n..\n" + configs.getInstance().sors_moi_de_la + "\n";
        this.type(result, this.unlock.bind(this));

    };

    Terminal.prototype.cesar = function () {
        lastCommand = cmds.CESAR.value;
        var result = "" + configs.getInstance().cesar + "\n";
 
        this.type(result, this.unlock.bind(this));
    };
    Terminal.prototype.facture = function () {
        if(lastCommand == cmds.LODEVE.value){
            lastCommand = cmds.FACTURE.value;
            var result = "" + configs.getInstance().facture + "\n";
            this.type(result, this.unlock.bind(this));
        }else{
            this.type("Nope... T'as cramé cette commande en avance dans ton tel (je suis deg). Donc entre d'abord la commande précèdente pour accéder à celle-ci.\nMais c'est malin d'avoir essayé", this.unlock.bind(this));
        }
    };
    Terminal.prototype.christol = function () {
        lastCommand = cmds.CHRISTOL.value;
        var result = "" + configs.getInstance().christol + "\n";
 
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.step3 = function () {
        lastCommand = cmds.STEP3.value;
        var result = "" + configs.getInstance().step3 + "\n";
 
        this.type(result, this.unlock.bind(this));
    };
    Terminal.prototype.instagram = function () {
        lastCommand = cmds.INSTAGRAM.value;
        console.log(lastCommand);
        var result = "" + configs.getInstance().instagram + "\n";
 
        this.type(result, this.unlock.bind(this));
    };
    Terminal.prototype.lodeve = function () {
        lastCommand = cmds.LODEVE.value;
        var result = "" + configs.getInstance().lodeve + "\n";
 
        this.type(result, this.unlock.bind(this));
    };
    Terminal.prototype.dix_aout_04 = function () {
        lastCommand = cmds.DIX_AOUT_04.value;
        var result = "" + configs.getInstance().dix_aout_04 + "\n";
 
        this.type(result, this.unlock.bind(this));
    };
    Terminal.prototype.last = function () {
        lastCommand = cmds.LAST.value;
        var result = "" + configs.getInstance().last + "\n";
 
        this.type(result, this.unlock.bind(this));
        
    };

    Terminal.prototype.help = function () {
        lastCommand = cmds.HELP.value;
        var result = configs.getInstance().general_help + "\n\n";
        for (var cmd in cmds) {
            if(cmd!=="CESAR" && cmd!=="STEP3" && cmd!=="LODEVE" && cmd!=="FACTURE" && cmd!=="CHRISTOL" && cmd!=="DIX_AOUT_04" && cmd!=="LAST" && cmd!=="INSTAGRAM") {
            result += cmds[cmd].value + " - " + cmds[cmd].help + "\n";
            }
            
        }

        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.clear = function () {
        lastCommand = cmds.CLEAR.value;
        this.output.textContent = "";
        this.prompt.textContent = "";
        this.prompt.textContent = this.completePrompt;
        this.unlock();
    };

    Terminal.prototype.reboot = function () {
        lastCommand = cmds.REBOOT.value;
        this.type(configs.getInstance().reboot_message, this.reset.bind(this));
    };

    Terminal.prototype.reset = function () {
      //      lastCommand = cmds.RESET.value;
        this.output.textContent = "";
        this.prompt.textContent = "";
        if (this.typeSimulator) {
            this.type(configs.getInstance().welcome +"\n"+ configs.getInstance().chal1  + (isUsingIE ? "\n" + configs.getInstance().internet_explorer_warning : ""), function () {
                this.unlock();
            }.bind(this));
        }
    };

    Terminal.prototype.permissionDenied = function (cmdComponents) {
        this.type(configs.getInstance().permission_denied_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.invalidCommand = function (cmdComponents) {
        this.type(configs.getInstance().invalid_command_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.focus = function () {
        this.cmdLine.focus();
    };

    var TypeSimulator = function (timer, output) {
        var timer = parseInt(timer);
        if (timer === Number.NaN || timer < 0) {
            throw new InvalidArgumentException("Invalid value " + timer + " for argument 'timer'.");
        }
        if (!(output instanceof Node)) {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        this.timer = timer;
        this.output = output;
    };

    TypeSimulator.prototype.type = function (text, callback) {
        if (isURL(text)) {
            window.open(text);
        }
        var i = 0;
        var output = this.output;
        var timer = this.timer;
        var skipped = false;
        var skip = function () {
            skipped = true;
        }.bind(this);
        document.addEventListener("dblclick", skip);
        (function typer() {
            if (i < text.length) {
                if(i===text.length-1 && lastCommand==="facture") {
                    document.getElementById("output").innerHTML+="<br><br><img src='camera.png' height='650px' width='950px'>";

                }if(i===text.length-1 && lastCommand==="instagram_emma.roy__"){
                    document.getElementById("output").innerHTML+="<br><br><img src='reviews.jpg' height='650px' width='1200px'>";

                }
                var char = text.charAt(i);
                var isNewLine = char === "\n";
                output.innerHTML += isNewLine ? "<br/>" : char;
                i++;
                if (!skipped) {
                    setTimeout(typer, isNewLine ? timer * 2 : timer);
                } else {
                    output.innerHTML += (text.substring(i).replace(new RegExp("\n", 'g'), "<br/>")) + "<br/>";
                    document.removeEventListener("dblclick", skip);
                    callback();
                }
            } else if (callback) {
                output.innerHTML += "<br/>";
                document.removeEventListener("dblclick", skip);
                callback();
            }
            scrollToBottom();
        })();
    };

    return {
        listener: function () {
            new Terminal(
                document.getElementById("prompt"),
                document.getElementById("cmdline"),
                document.getElementById("output"),
                configs.getInstance().user,
                configs.getInstance().host,
                configs.getInstance().is_root,
                configs.getInstance().type_delay
            ).init();
        }
    };
})();

window.onload = main.listener;
