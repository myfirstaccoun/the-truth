function allIndexInArr(arr, item) {
    let ind = [];
    for(let i = 0; i < arr.length; i++) {
        if(typeof(item) == "object" && typeof(arr[i]) == "object") {
            JSON.stringify(arr[i]) == JSON.stringify(item)? ind.push(i) : "";
        } else {
            arr[i] == item? ind.push(i) : "";
        }
    }

    return ind;
}

function inArr(arr, item) {
    return allIndexInArr(arr, item).length > 0? true : false;
}

let partsCont = document.querySelector(".cont");
let langs = document.querySelector(".langs");

let langsText = ["🇬🇧 EN", "🇫🇷 FR", "🇪🇸 ES", "🇩🇪 DE", "🇯🇵 JP", "🇮🇹 IT"];
let langsContent = [
// english
`
<h1 class="title">The Truth</h1>

<div class="part">
    Hello everyone, I hope you will read this article to the end because it's very important. Let's jump on it.

    <br><br>
    <h1>Part 1: There must be a God</h1>
    Let us agree that anything that happens has a cause. For example, if someone hits you, you'll feel pain. Based on this, we conclude that every created thing has a Creator, every machine has a creator, every house was built by a creator, and the universe has God. This is because anything that happens has a cause.<br><br>
    
    <img src="./universe.png">
    
    If you think that the universe was created by the big bang, you are wrong. When you say that the start of the universe is a very small thing, then you haven't answered the question "Who created this small thing?" And the answer is absolutely God. God must be perfect to create the universe alone, and there is no similarity to Him, and no one is similar to Him because God created us and all the creativity in the universe. You must worship Him alone because He created you. If you believe that we are created by chance by evolution, you are wrong because...
</div>

<div class="part">
    <h1>Part 2: Evolution</h1>
    First, I want you to know that the universe is finely tuned, and chance cannot create this tuned universe. Second, let us know the four pillars of evolution theory.<br><br>

    <h3>Theory pillars</h3>
    1. Living organisms were born in some way from inanimate objects.<br>
    2. Nature endows organisms with new characteristics that can transform them from one species to another.<br>
    3. Acquired traits are inherited, and nature selects cumulatively up to higher beings.<br>
    4. Nature installs complex vital systems of successive simple changes.<br><br>

    The conclusion is that living beings are "evolved" without the intent or will of a chosen or willing creator who knows what he is doing.<br><br>

    Let us make sure of these pillars.<br><br>

    <h3>Make sure</h3>
    1. Living organisms were born in some way from inanimate objects.<br>
    This is a myth that fell through experiments, the most famous of which was Francesco Redi's experiment, two centuries before Darwin. He proved that the organisms that were believed to have been self-generated from inanimate objects such as leftovers came from outside the material, food with polluted air.<br><br>

    The truth is that self-generation is originally illogical. It is impossible to imagine a living being that arises automatically from inanimate objects. But they insisted on trying! They tried, and the superstition was destroyed by empirical science and the mind.<br><br>


    2. Nature endows the organism with new characteristics:<br>
    This is also a myth that fell with the discoveries of Gregor Mendel, who proved - years after Darwin - that the hereditary characteristics of children will not deviate from what was originally in the parents. It also fell with the discoveries of epigenetics, which showed that external and environmental factors can change the way genetic material is read in an organism to activate a trait or to extinguish a trait that was activated, but does not add genetic material that was not originally present.<br><br>


    3. Acquired traits are inherited, and nature selects cumulatively up to higher beings:<br>
    As you guess, this is also a fallen myth. The muscles of the blacksmith and the carpenter, for example, are not inherited by their children. However, Darwin's followers insisted on trying. Weismann kept cutting the tails of 19 generations of rats, only to be surprised, after a long toil, by the birth of their offspring with tails again. This means that the acquired trait, which is the severed tail, was not passed on to the children.<br><br>

    What is left of Darwin's theory then?<br><br>

    4. Nature installs complex vital systems of successive simple changes.<br>
    Until you understand what Darwin's natural selection means? Darwin's vast imagination brought him the idea that nature, use and neglect; Ancient organisms produced simple bodily structures that could have served the organism in something, so natural selection preserved them. Who did not know that the accumulation of these structures would produce a complete and integrated organ such as a wing for a bird or an eye for an animal?<br><br>

    <h2>Story</h2>

    To understand Darwin's logic, imagine a land full of junk. Large numbers of blind people pass through it, and each of them picks up a piece of junk at random. Then, they enter a large building whose door is closed after each entry.<br><br>

    <img src="./junk.png">

    Millions of years passed, and the blind picked up the scraps, died, and were buried under the ground of the building.<br>
    One day, you opened the gate of the building, and a giant Boeing plane, driven by a blind man, rushed out of the gate and flew into the sky!<br>

    <img src="./air plane.png">

    You wondered: How did the blind man build the plane?! It was said to you: He did not intend to make it! But what happened with the blind before him is that whoever picks up a useful piece of scrap for him; he stood firm and bequeathed it to his successor! Some of them picked up a cloth to protect them from the cold; another picked a flat iron to shade them from the sun, and a third picked up a plane steering wheel with which they stirred their food while cooking, and a fourth picked a bottle that they used as a shield in their war against their blind enemies!<br><br>

    This continued in successive times, and they bequeathed their pieces to those who succeeded them, and the pieces were installed unintentionally, nor by an active action until this great plane that I saw was formed from it!<br><br>

    So, beware of the delusion that someone intended for an airplane to form or fly!<br><br>
    By the same reasoning, Darwin considered that natural selection has blindly patched up the structures of organisms. For example, the wings of birds to help them fly are a "pseudopurpose". It means an imaginary goal, not a real one! And the eye is an imaginary target because there is no chosen willful doer who intended for the eye to see, or for the wing to flutter. Rather, all of this came with accumulations of blind coincidences!<br>

    This is the joke of blind natural selection that Darwin came up with, and it is - in addition to its absurdity for every healthy mind - that scientific discoveries have proven their impossibility with the existence of irreducible complexity in all the details of organisms and their relationships. That is, the structures and members of living organisms are extremely complex and integrated so that they can only exist with the availability of their parts at one time. Otherwise, they will not perform their function. Thus, they are not amenable to the idea of gradual formation at all, even at the level of the smallest living unit.<br><br>

    Darwin did not see the cell under the microscope in his days except as a simple smear!<br><br>

    Natural selection as portrayed by Darwin is also a myth.<br><br>

    Based on these baseless superstitions of reason, sense, and experience, Darwin built the most absurd and stupid idea in history. All that we see of judgment and mastery in this creation came by chance without intention and does not need knowledge or wisdom!<br><br>

    After seeing the invalidity of this theory, you must trust that the universe cannot be created by chance and also trust that "there must be a God".<br><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=x0jw56ylJOE&list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc&index=24">Learn More (evolution) [Video - En Subtitles].</a><br>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc">Learn More [Playlist - En Subtitles] (Start from first video or video number 24 in Playlist to the end).</a>

</div>

<div class="part">
    <h1>Part 3: Finding the Right Religion</h1>
    Let us agree that any religion made by humans is wrong because religion must be from God, and the right religion must not have been misrepresented. We now have three monotheistic religions: Judaism, Christianity, and Islam.<br><br>

    🔷 First is Judaism:<br>
    To be Jewish, you must be from the family of them. Absolutely, this religion is void because it's not fair if you want to worship God who created you and cannot do that because you are not from their family.<br><br>

    🔷 Second is Christianity:<br>
    <ul>
        <li>In Christianity, you must believe that God is three Gods: Father, Son, and Holy Spirit. This idea about God was made by some priests, but how does there exist three Gods? If Father, Son, and Holy Spirit are Gods, then they can control the universe. But the Son is human, and humans cannot control the universe.</li><br>
        <li>The holy book of Christianity is the Bible, and the Bible has been misrepresented by humans. I hope you read about "copies" of the Bible and its contradictions and there are many translations of the Bible, although the Hebrew text is the same. For example, When was David's age when ruling? Was it 1, 30, or 40?</li><br>
        <li>If the Father wants someone to die at 4, and the Son wants that person to die at 5, then what happens? Will that person die at 4 or 5? If the answer is 4, then the Son isn't God. If the answer is 5, then the Father isn't God because God must be able to control the universe.</li><br>
        <li>In Christianity, there is a derogation from God. There is a story that tells that Jacob fought God, and he was going to kill him. But we agreed that God must be perfect for Him alone, and God strongest in the entire universe because God created the universe.</li><br><br>
        
        <li>Fifth reason is:</li><br>
        
        <ul>
            <li>In Christianity, God sent Jesus down to Earth to be crucified to expiate Adam's sin. But who committed sin? Adam or Jesus? What is the sin of Jesus to be crucified, and who committed the sin, Adam?</li><br>
            <li>In Christianity, Jesus was crucified to expiate sin on behalf of Adam. And who came after Jesus but died before the death of Jesus died in sin! What is the sin of those who came before Jesus to die in sin, and why didn't Jesus come down before that to expiate the sins of more people?</li><br>
            <li>Where did Jesus say, "I am God"? Where did he seek worship for himself? Where did he say, "I am God appearing in the flesh"? Where did he talk about original sin? Where did he say, "I am God the Son"? Where did he say, "I am God the Word"? And where did he say, "I am God, the second person"?</li>
        </ul>
    </ul>
    
    <br>

    <a target="_blank" href="https://www.youtube.com/watch?v=M71t_GmkJ1g">Learn More (christianity) [Video - En Subtitles].</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=7iFCMs8jE8k">Learn More (trinity) [Video - En Subtitles].</a><br>
    
    <br><br>

    Now we have the final religion, which is Islam. But before you continue reading or listening, don't trust the media and films because they will not disclose the full truth of Islam. They only distort the image of Islam in your brain. Don't trust them. Search for the truth yourself, and let's jump into it.
</div>

<div class="part">
    <h1>Part 4: Are You Really Know Islam?</h1>
    Islam is a religion that commands you to worship Allah, the one God, with no partner and obey his prophet Mohammed - Peace be upon him -.<br>
    To be a Muslim, you say the two testimonies:<br>
    أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله ('ashhad 'an la 'iilah 'iilaa allah wa'ashhad 'ana muhamadan eabduh warasuluhu).<br>
    which means: "I testify that there is no god but Allah, and I testify that Mohammed is His Prophet and Messenger."<br><br>

    <a target="_blank" href="https://www.islam-guide.com/ch3-8.htm">Learn More about Prophet Mohammed - peace be upon him - [article]</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=_JbKdKS9Yyg">Learn More about Prophet Mohammed - peace be upon him - [Video - En Subtitles]</a><br><br>

    Islam is the religion that agrees with human nature. It's the religion that calls for worshipping the one God who is Allah.<br><br>

    Allah is the God of all the universe. Allah is perfect for Him alone, and there is no similarity to Him, and no one is similar to Him. You must worship Him alone.<br><br>

    Now let us know the pillars of Islam that make you Muslim:<br>
    1. Two testimonies<br>
    2. The five Prayers<br>
    3. Paying Zakat<br>
    4. Fasting in Ramadan<br>
    5. Hajj<br><br>

    Fourth is Fasting in Ramadan. Ramadan is a Hijri Month when you must stop eating and drinking from Fajr to Maghreb and where there is a night called Night of Al-Qadr. Whoever wins it is better for him than a thousand months.<br>

    <h3>Aqida (Muslim believe)</h3>
    The Muslim believes in Allah the Lord of the heavens and the earth. Master of everything in existence. The Lord of Ibrahim. Messengers and revelations have been sent to us from the time of our father Adam to the last of the prophets, Muhammad, peace and blessings be upon him. He came with the final revelation. The word “رب العالمين” means Lord of the Worlds. “All that is in the heavens and all that is on earth glorifies Allah. “And He is the Mighty, the Wise” 59:1<br><br>

    Even if people do not believe in Allah and worship someone else, that does not change the fact that they are His creation and that He is the one who can guide them to the straight path (Islam) or condemn them to disbelieve in Him. Revelation after showing them that this is the truth. This is the Muslim belief.<br><br>

    
    
    <h3>Sharia (laws)</h3>
    A Muslim does not use the “benign” Sharia law in Islamic countries. Rather, but use Sharia law. Sharia is the definition of the heavenly laws that Allah has commanded us to follow such as prayer, fasting, charity, good manners, wearing the hijab, and building good relationships with the people you live with, neighbors and the elderly, are all part of Sharia. Sharia also covers governance, politics, the judicial system, law enforcement, and many other aspects of life. Islam is the way of life and it covers all the necessary matters of life so that we can live and govern ourselves to the satisfaction of Allah.<br><br>
    
    in Islam you make the rules of Allah control you in your life as you mustn't do anything forbidden or taboo, and if you think it's not freedom, so for example if your son went to market and want to eat all chocolates in market you will stop him right? then do you want him without freedom, or you know that if he do that he will hurt himself?<br><br>

    Allah created the universe and He know which things hurt us, and Allah created the world as a place of affliction and fatigue, not a place of reward.<br><br>

    <h3>Pray</h3>
    Prayers change for each country due to seasonal changes, but if you live in a region like the Middle East, North Africa, and East Africa, daily prayers are set at specific times and never change. It's more about the time of day. For example: Fajr prayer before sunrise, around the time of dawn. It is not permissible to pray it as soon as the sun rises, then there is noon, afternoon, after sunset, then evening. If the time of sunrise and sunset changes, the time of prayer changes.<br><br>

    <h3>Qur'an</h3>
    In Islam holy book is Quran which is words of Allah, The Qur’an was revealed in the Arabic language in an Arab country when the Arabs were most eloquent, challenging all Arabs in its eloquence and its beautiful words, And So far, nothing like The Qur'an has been written in its eloquence and Surah is a part from Qur'an.<br><br>
    
    <a target="_blank" href="https://www.youtube.com/watch?v=TGuZMLhyRXg">Learn More (Someone made Surah like Qur'an?!)</a><br><br>

    Quran is not misrepresented and you can make sure of it by search about oldest Quran, it no different between it and latest Quran (except the font), and what increases your certainty is .. The Qur'an is an audio book before it is a written book and there is such a thing as permission to read the Holy Quran which is a continuous chain from the person who is proficient in reading the Qur’an to the Prophet Mohammed - Peace be upon him -<br><br>

    The Qur'an can be translated and translated into any other language in the world for people to understand what they read but Allah sent down the revelation in the Arabic language so the only Arabic language can be considered the “revelation”. Others will simply be a translation of the Qur'an. 80% of Muslims are non-Arabs but are still able to recite and understand the Qur’an and recite the Qur’an in prayer daily. However, if you want to get the full experience, you have to learn Arabic because most Islamic sources are in Arabic.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=mJyNYxPEiMw">Learn Arabic and Qur'an (Roadmap Video)</a><br>
    <a target="_blank" href="https://arabic101.org/wp-content/uploads/woocommerce_uploads/2023/03/quran-quest_2.pdf">Learn Arabic and Qur'an (Roadmap Pdf)</a><br>

    <h3>Zakat</h3>
    There is no tax imposed by the government at all in Islam. There should be no taxes because it is an un-Islamic concept. If a non-Muslim wishes to live under an Islamic government, he or she pays the jizya, which is a tax for non-Muslims to give them safety and security, as well as access to the same services and privileges as Muslims. As for the Muslim, he does something obligatory in Islam called zakat. Muslims are required to pay 2.5% of our wealth to the poor annually, while the jizya is much less than zakat. This makes society better and compensates for the lack of resources and privileges between the poor and the rich while lifting each other up. It is not permissible for a Muslim to take zakat from other Muslims unless he is in need of it. Therefore, there are times in history when Islamic rulers did not have poor people to feed and the population complained about who was giving alms.<br>
</div>

<div class="part">
    Coming Soon...
</div>
`,


// france
`
<h1 class="title">La vérité</h1>

<div class="part">
    Bonjour à tous, j'espère que vous lirez cet article jusqu'au bout car il est très important. Sautons dessus.

    <br><br>
    <h1>Partie 1 : Il doit y avoir un Dieu</h1>
    Admettons que tout ce qui arrive a une cause. Par exemple, si quelqu’un vous frappe, vous ressentirez de la douleur. Sur cette base, nous concluons que chaque chose créée a un Créateur, chaque machine a un Créateur, chaque maison a été construite par un Créateur et l’univers a Dieu. C’est parce que tout ce qui arrive a une cause.<br><br>
    
    <img src="./universe.png">
    
    Si vous pensez que l’univers a été créé par le Big Bang, vous vous trompez. Quand vous dites que le début de l’univers est une toute petite chose, alors vous n’avez pas répondu à la question « Qui a créé cette petite chose ? » Et la réponse est absolument Dieu. Dieu doit être parfait pour créer l'univers seul, et il n'y a aucune similitude avec Lui, et personne ne Lui est semblable parce que Dieu nous a créés ainsi que toute la créativité de l'univers. Vous devez l’adorer seul parce qu’il vous a créé. Si vous croyez que nous sommes créés par hasard par l'évolution, vous vous trompez car...
</div>

<div class="part">
    <h1>Partie 2 : Évolution</h1>
    Tout d’abord, je veux que vous sachiez que l’univers est finement réglé et que le hasard ne peut pas créer cet univers réglé. Deuxièmement, connaissons les quatre piliers de la théorie de l’évolution.<br><br>

    <h3>Piliers théoriques</h3>
    1. Les organismes vivants sont nés d’une manière ou d’une autre d’objets inanimés.<br>
    2. La nature confère à l'organisme de nouvelles caractéristiques qui peuvent le transformer d'une espèce à une autre.<br>
    3. Les traits acquis sont hérités et la nature sélectionne cumulativement les êtres supérieurs.<br>
    4. La nature installe des systèmes vitaux complexes de changements simples successifs.<br><br>

    La conclusion est que les êtres vivants ont « évolué » sans l'intention ou la volonté d'un créateur choisi ou volontaire qui sait ce qu'il fait.<br><br>

    Assurons-nous de ces piliers.<br><br>

    <h3>S'assurer</h3>
    1. Les organismes vivants sont nés d’une manière ou d’une autre d’objets inanimés.<br>
    Il s’agit d’un mythe issu d’expériences, dont la plus célèbre fut celle de Francesco Redi, deux siècles avant Darwin. Il a prouvé que les organismes que l'on croyait auto-générés à partir d'objets inanimés tels que des restes provenaient de l'extérieur du matériau, de la nourriture avec un air pollué.<br><br>

    La vérité est que l’autogénération est à l’origine illogique. Il est impossible d’imaginer un être vivant issu automatiquement d’objets inanimés. Mais ils ont insisté pour essayer ! Ils ont essayé, et la superstition a été détruite par la science empirique et l'esprit.<br><br>


    2. La nature confère à l'organisme de nouvelles caractéristiques :<br>
    C'est aussi un mythe qui est tombé avec les découvertes de Gregor Mendel, qui a prouvé - des années après Darwin - que les caractéristiques héréditaires des enfants ne s'écarteront pas de celles qui étaient originellement chez les parents. Il est également tombé avec les découvertes de l'épigénétique, qui ont montré que des facteurs externes et environnementaux peuvent modifier la façon dont le matériel génétique est lu dans un organisme pour activer un trait ou éteindre un trait qui a été activé, mais n'ajoutent pas de matériel génétique qui n'était pas à l'origine. présent.<br><br>


    3. Les traits acquis sont hérités et la nature sélectionne cumulativement les êtres supérieurs :<br>
    Comme vous le devinez, c’est aussi un mythe déchu. Les muscles du forgeron et du charpentier, par exemple, ne sont pas hérités par leurs enfants. Cependant, les partisans de Darwin ont insisté pour essayer. Weismann a continué à couper la queue de 19 générations de rats, pour ensuite être surpris, après un long labeur, par la naissance de leur progéniture à nouveau avec une queue. Cela signifie que le trait acquis, à savoir la queue coupée, n'a pas été transmis aux enfants.<br><br>

    Que reste-t-il alors de la théorie de Darwin ?<br><br>

    4. La nature installe des systèmes vitaux complexes de changements simples successifs.<br>
    Jusqu'à ce que vous compreniez ce que signifie la sélection naturelle de Darwin ? La vaste imagination de Darwin lui a amené l'idée que la nature, l'utilisation et la négligence ; Les organismes anciens produisaient des structures corporelles simples qui auraient pu servir l'organisme à quelque chose, c'est pourquoi la sélection naturelle les a préservées. Qui ne savait pas que l'accumulation de ces structures produirait un organe complet et intégré tel qu'une aile pour un oiseau ou un œil pour un animal ?<br><br>

    <h2>Histoire</h2>

    Pour comprendre la logique de Darwin, imaginez un pays rempli de déchets. Un grand nombre d'aveugles y passent, et chacun d'eux ramasse une ferraille au hasard. Ensuite, ils entrent dans un grand bâtiment dont la porte est fermée après chaque entrée.<br><br>

    <img src="./junk.png">

    Des millions d'années se sont écoulées et les aveugles ont ramassé les restes, sont morts et ont été enterrés sous le sol du bâtiment.<br>
    Un jour, vous avez ouvert la porte du bâtiment, et un avion géant Boeing, conduit par un aveugle, s'est précipité hors de la porte et s'est envolé dans le ciel !<br>

    <img src="./air plane.png">

    Vous vous êtes demandé : comment l’aveugle a-t-il construit l’avion ?! On vous a dit : Il n'avait pas l'intention d'y arriver ! Mais ce qui est arrivé à l'aveugle avant lui, c'est que quiconque ramasse pour lui un morceau de ferraille utile ; il a tenu bon et l'a légué à son successeur ! Certains d'entre eux ont ramassé un tissu pour se protéger du froid ; un autre a choisi un fer plat pour les protéger du soleil, et un troisième a pris un volant d'avion avec lequel ils remuaient leur nourriture pendant la cuisson, et un quatrième a choisi une bouteille qu'ils ont utilisée comme bouclier dans leur guerre contre leurs ennemis aveugles ! <br><br>

    Cela a continué dans les temps successifs, et ils ont légué leurs pièces à ceux qui leur ont succédé, et les pièces ont été installées involontairement, ni par une action active jusqu'à ce que ce grand plan que j'ai vu en soit formé !<br><br>

    Alors, méfiez-vous de l'illusion selon laquelle quelqu'un aurait voulu qu'un avion se forme ou vole !<br><br>
    Selon le même raisonnement, Darwin considérait que la sélection naturelle avait aveuglément rafistolé les structures des organismes. Par exemple, les ailes des oiseaux qui les aident à voler sont un « pseudo-objectif ». Cela signifie un objectif imaginaire, pas réel ! Et l’œil est une cible imaginaire parce qu’il n’y a pas d’auteur volontaire choisi qui ait l’intention que l’œil voie ou que l’aile batte. Au contraire, tout cela est venu avec une accumulation de coïncidences aveugles !<br>

    C'est la plaisanterie de la sélection naturelle aveugle qu'a inventée Darwin, et c'est - en plus de son absurdité pour tout esprit sain - que les découvertes scientifiques ont prouvé leur impossibilité avec l'existence d'une complexité irréductible dans tous les détails des organismes et de leurs relations. . Autrement dit, les structures et les membres des organismes vivants sont extrêmement complexes et intégrés, de sorte qu’ils ne peuvent exister qu’avec la disponibilité de leurs parties à un moment donné. Sinon, ils ne rempliront pas leur fonction. Ainsi, ils ne se prêtent pas du tout à l’idée d’une formation progressive, même au niveau de la plus petite unité de vie.<br><br>

    Darwin ne voyait pas la cellule au microscope à son époque, sauf sous la forme d'un simple frottis !<br><br>

    La sélection naturelle telle que décrite par Darwin est également un mythe.<br><br>

    Sur la base de ces superstitions sans fondement de la raison, des sens et de l’expérience, Darwin a construit l’idée la plus absurde et la plus stupide de l’histoire. Tout ce que nous voyons de jugement et de maîtrise dans cette création est venu par hasard sans intention et n'a pas besoin de connaissance ou de sagesse !<br><br>

    Après avoir vu l'invalidité de cette théorie, vous devez croire que l'univers ne peut pas être créé par hasard et aussi croire qu'"il doit y avoir un Dieu".<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=x0jw56ylJOE&list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc&index=24">En savoir plus (évolution) [Vidéo - Sous-titres français].</a><br>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc">En savoir plus [Playlist - Sous-titres français] (Commencez à partir de la première vidéo ou vidéo numéro 24 de la Playlist jusqu'à la fin).</a>
</div>

<div class="part">
    <h1>Partie 3 : Trouver la bonne religion</h1>
    Soyons d’accord sur le fait que toute religion créée par les humains est fausse parce que la religion doit provenir de Dieu, et que la bonne religion ne doit pas avoir été déformée. Nous avons désormais trois religions monothéistes : le judaïsme, le christianisme et l'islam.<br><br>

    🔷 Le premier est le judaïsme :<br>
    Pour être juif, vous devez être issu de leur famille. Absolument, cette religion est nulle car ce n'est pas juste si vous voulez adorer Dieu qui vous a créé et ne pouvez pas le faire parce que vous n'êtes pas de leur famille.<br><br>

    🔷 Deuxièmement, le christianisme :<br>
    <ul>
        <li>Dans le christianisme, vous devez croire que Dieu est constitué de trois dieux : le Père, le Fils et le Saint-Esprit. Cette idée de Dieu a été formulée par certains prêtres, mais comment existe-t-il trois Dieux ? Si le Père, le Fils et le Saint-Esprit sont des Dieux, alors ils peuvent contrôler l’univers. Mais le Fils est humain et les humains ne peuvent pas contrôler l'univers.</li><br>
        <li>Le livre sacré du christianisme est la Bible, et la Bible a été déformée par les humains. J'espère que vous lisez des informations sur les « copies » de la Bible et leurs contradictions et qu'il existe de nombreuses traductions de la Bible, bien que le texte hébreu soit le même. Par exemple, quel était l'âge de David lorsqu'il régnait ? Était-ce 1, 30 ou 40 ?</li><br>
        <li>Si le Père veut que quelqu'un meure à 4 ans et que le Fils veut que cette personne meure à 5 ans, que se passe-t-il ? Cette personne mourra-t-elle à 4 ou 5 ans ? Si la réponse est 4, alors le Fils n’est pas Dieu. Si la réponse est 5, alors le Père n'est pas Dieu car Dieu doit être capable de contrôler l'univers.</li><br>
        <li>Dans le christianisme, il existe une dérogation à Dieu. Il y a une histoire qui raconte que Jacob a combattu Dieu et qu'il allait le tuer. Mais nous avons convenu que Dieu doit être parfait pour Lui seul, et Dieu le plus fort de tout l'univers parce que Dieu a créé l'univers.</li><br><br>
    
        <li>La cinquième raison est la suivante :</li><br>
    
        <ul>
            <li>Dans le christianisme, Dieu a envoyé Jésus sur Terre pour être crucifié afin d'expier le péché d'Adam. Mais qui a commis le péché ? Adam ou Jésus ? Quel est le péché de Jésus qui a été crucifié, et qui a commis le péché, Adam ?</li><br>
            <li>Dans le christianisme, Jésus a été crucifié pour expier le péché au nom d'Adam. Et qui est venu après Jésus mais est mort avant la mort de Jésus est mort dans le péché ! Quel est le péché de ceux qui sont venus avant Jésus pour mourir dans le péché, et pourquoi Jésus n'est-il pas descendu avant cela pour expier les péchés d'un plus grand nombre de personnes ?</li><br>
            <li>Où Jésus a-t-il dit : « Je suis Dieu » ? Où a-t-il cherché à être adoré pour lui-même ? Où a-t-il dit : « Je suis Dieu apparaissant dans la chair » ? Où a-t-il parlé du péché originel ? Où a-t-il dit : « Je suis Dieu le Fils » ? Où a-t-il dit : « Je suis Dieu la Parole » ? Et où a-t-il dit : « Je suis Dieu, la deuxième personne » ?</li>
        </ul>
    </ul>    
    
    <br>

    <a target="_blank" href="https://www.youtube.com/watch?v=M71t_GmkJ1g">En savoir plus (christianisme) [Vidéo - Sous-titres français].</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=7iFCMs8jE8k">En savoir plus (trinity) [Vidéo - Sous-titres français].</a><br>
    
    <br><br>

    Nous avons maintenant la dernière religion, qui est l'Islam. Mais avant de continuer à lire ou à écouter, ne faites pas confiance aux médias et aux films car ils ne divulgueront pas toute la vérité sur l'Islam. Ils ne font que déformer l’image de l’Islam dans votre cerveau. Ne leur faites pas confiance. Recherchez vous-même la vérité et allons-y.
</div>

<div class="part">
    <h1>Partie 4 : Connaissez-vous vraiment l'Islam ?</h1>
    L'Islam est une religion qui vous ordonne d'adorer Allah, le Dieu Unique, sans partenaire et d'obéir à son prophète Mohammed - que la paix soit sur lui -.<br>
    Pour être musulman, vous dites les deux témoignages :<br>
    أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله ('ashhad 'an la 'iilah 'iilaa allah wa'ashhad 'ana muhamadan eabduh warasuluhu).<br>
    ce qui signifie : "Je témoigne qu'il n'y a de dieu qu'Allah, et je témoigne que Mohammed est Son Prophète et Messager."<br><br>

    <a target="_blank" href="https://www.islam-guide.com/ch3-8.htm">Learn More about Prophet Mohammed - peace be upon him - [article]</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=_JbKdKS9Yyg">En savoir plus sur le Prophète Mahomet - que la paix soit sur lui - [Vidéo - France Sous-titres]</a><br><br>

    L'Islam est la religion qui est en accord avec la nature humaine. C'est la religion qui appelle à adorer le Dieu unique qui est Allah.<br><br>

    Allah est le Dieu de tout l'univers. Allah est parfait pour Lui seul, et il n'y a aucune similitude avec Lui, et personne ne Lui est semblable. Vous devez l'adorer seul.<br><br>

    Maintenant, faites-nous savoir les piliers de l'Islam qui font de vous un musulman :<br>
    1. Deux témoignages<br>
    2. Les cinq prières<br>
    3. Payer la Zakat<br>
    4. Jeûne pendant le Ramadan<br>
    5. Hajj<br><br>

    Le quatrième est le jeûne du Ramadan. Le Ramadan est un mois de l'Hégire où il faut arrêter de manger et de boire du Fajr au Maghreb et où il y a une nuit appelée Nuit d'Al-Qadr. Celui qui gagne vaut mieux pour lui que mille mois.<br>

    <h3>Aqida (croyance musulmane)</h3>
    Le musulman croit en Allah, le Seigneur des cieux et de la terre. Maître de tout ce qui existe. Le Seigneur d'Ibrahim. Des messagers et des révélations nous ont été envoyés depuis l'époque de notre père Adam jusqu'au dernier des prophètes, Mahomet, que la paix et la bénédiction soient sur lui. Il est venu avec la révélation finale. Le mot « رب العالمين » signifie Seigneur des Mondes. « Tout ce qui est dans les cieux et tout ce qui est sur terre glorifie Allah. « Et Il est le Puissant, le Sage » 59 : 1<br><br>

    Même si les gens ne croient pas en Allah et adorent quelqu'un d'autre, cela ne change rien au fait qu'ils sont Sa création et qu'Il est Celui qui peut les guider vers le droit chemin (Islam) ou les condamner à ne pas croire en Lui. Révélation après leur avoir montré que c'est la vérité. C'est la croyance musulmane.<br><br>

    <h3>Charia (lois)</h3>
    Un musulman n’utilise pas la charia « bénigne » dans les pays islamiques. Utilisez plutôt la charia. La charia est la définition des lois célestes qu'Allah nous a ordonné de suivre, telles que la prière, le jeûne, la charité, les bonnes manières, le port du hijab et l'établissement de bonnes relations avec les personnes avec qui vous vivez, les voisins et les personnes âgées, font toutes partie de Sharia. La charia couvre également la gouvernance, la politique, le système judiciaire, l'application de la loi et bien d'autres aspects de la vie. L'Islam est le mode de vie et il couvre toutes les questions nécessaires à la vie pour que nous puissions vivre et nous gouverner à la satisfaction d'Allah.<br><br>
   
    dans l'Islam, vous faites en sorte que les règles d'Allah vous contrôlent dans votre vie car vous ne devez rien faire d'interdit ou de tabou, et si vous pensez que ce n'est pas la liberté, par exemple si votre fils est allé au marché et veut manger tous les chocolats du marché, vous va l'arrêter, n'est-ce pas ? alors, tu le veux sans liberté, ou tu sais que s'il fait cela, il se fera du mal ?<br><br>

    Allah a créé l'univers et Il sait quelles choses nous font du mal, et Allah a créé le monde comme un lieu d'affliction et de fatigue, pas un lieu de récompense.<br><br>

    <h3>Prier</h3>
    Les prières changent pour chaque pays en raison des changements saisonniers, mais si vous vivez dans une région comme le Moyen-Orient, l'Afrique du Nord et l'Afrique de l'Est, les prières quotidiennes sont fixées à des heures précises et ne changent jamais. C'est plus une question d'heure de la journée. Par exemple : la prière du Fajr avant le lever du soleil, aux alentours de l’aube. Il n'est pas permis de la prier dès le lever du soleil, puis à midi, après-midi, après le coucher du soleil, puis le soir. Si l'heure du lever et du coucher du soleil change, l'heure de la prière change.<br><br>

    <h3>Qur'an</h3>
    In Islam holy book is Quran which is words of Allah, The Qur’an was revealed in the Arabic language in an Arab country when the Arabs were most eloquent, challenging all Arabs in its eloquence and its beautiful words, And So far, nothing like The Qur'an has been written in its eloquence and Surah is a part from Qur'an.<br><br>
    
    <a target="_blank" href="https://www.youtube.com/watch?v=TGuZMLhyRXg">En savoir plus (Quelqu'un a fait une sourate comme le Coran ?!) [Vidéo en anglais]</a><br><br>

    Le Coran n'est pas déformé et vous pouvez vous en assurer en recherchant le Coran le plus ancien, il n'y a pas de différence entre celui-ci et le dernier Coran (sauf la police), et ce qui augmente votre certitude est .. Le Coran est un livre audio avant d'être un livre écrit et il existe une autorisation de lire le Saint Coran qui est une chaîne continue allant de la personne qui maîtrise la lecture du Coran au Prophète Mohammed - Que la paix soit sur lui -<br><br>

    Le Coran peut être traduit et traduit dans n'importe quelle autre langue dans le monde pour que les gens comprennent ce qu'ils lisent, mais Allah a fait descendre la révélation en langue arabe afin que la seule langue arabe puisse être considérée comme la « révélation ». D'autres seront simplement une traduction du Coran. 80 % des musulmans ne sont pas arabes mais sont toujours capables de réciter et de comprendre le Coran et de le réciter quotidiennement dans la prière. Cependant, si vous souhaitez profiter pleinement de l'expérience, vous devez apprendre l'arabe car la plupart des sources islamiques sont en arabe.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=mJyNYxPEiMw">Apprendre l'arabe et le Coran (vidéo de la feuille de route)</a><br>
    <a target="_blank" href="https://arabic101.org/wp-content/uploads/woocommerce_uploads/2023/03/quran-quest_2.pdf">Apprendre l'arabe et le Coran (feuille de route Pdf)</a <br>

    <h3>Zakât</h3>
    Il n’y a aucun impôt imposé par le gouvernement dans l’Islam. Il ne devrait pas y avoir de taxes car c’est un concept non islamique. Si un non-musulman souhaite vivre sous un gouvernement islamique, il paie la jizya, qui est un impôt destiné aux non-musulmans pour leur assurer sûreté et sécurité, ainsi que l'accès aux mêmes services et privilèges que les musulmans. Quant au musulman, il accomplit une chose obligatoire en Islam appelée zakat. Les musulmans sont tenus de verser chaque année 2,5 % de leur richesse aux pauvres, alors que la jizya est bien inférieure à la zakat. Cela rend la société meilleure et compense le manque de ressources et de privilèges entre les pauvres et les riches tout en s’élevant mutuellement. Il n'est pas permis à un musulman de prendre la zakat aux autres musulmans, sauf s'il en a besoin. Par conséquent, il y a eu des moments dans l’histoire où les dirigeants islamiques n’avaient pas de pauvres à nourrir et où la population se plaignait de qui faisait l’aumône.<br>
</div>

<div class="part">
    Coming Soon...
</div>
`,


// spain
`
<h1 class="title">La verdad</h1>

<div class="part">
    Hola a todos, espero que lean este artículo hasta el final porque es muy importante. Saltemos sobre ello.

    <br><br>
    <h1>Parte 1: Debe haber un Dios</h1>
    Acordemos que todo lo que sucede tiene una causa. Por ejemplo, si alguien te golpea, sentirás dolor. Con base en esto, concluimos que cada cosa creada tiene un Creador, cada máquina tiene un creador, cada casa fue construida por un creador y el universo tiene a Dios. Esto se debe a que todo lo que sucede tiene una causa.<br><br>

    <img src="./universe.png">

    Si crees que el universo fue creado por el big bang, estás equivocado. Cuando dices que el comienzo del universo es una cosa muy pequeña, entonces no has respondido a la pregunta "¿Quién creó esta cosa tan pequeña?" Y la respuesta es absolutamente Dios. Dios debe ser perfecto para crear el universo solo, y no hay semejanza con Él, y nadie es similar a Él porque Dios nos creó a nosotros y a toda la creatividad del universo. Debes adorarlo solo a Él porque Él te creó. Si crees que somos creados por casualidad por la evolución, estás equivocado porque...
</div>

<div class="part">
    <h1>Parte 2: Evolución</h1>
    Primero, quiero que sepas que el universo está finamente sintonizado y que el azar no puede crear este universo sintonizado. En segundo lugar, conozcamos los cuatro pilares de la teoría de la evolución.<br><br>

    <h3>Pilares teóricos</h3>
    1. Los organismos vivos nacieron de alguna manera a partir de objetos inanimados.<br>
    2. La naturaleza dota a los organismos de nuevas características que pueden transformarlos de una especie a otra.<br>
    3. Los rasgos adquiridos se heredan y la naturaleza los selecciona de forma acumulativa hasta llegar a seres superiores.<br>
    4. La naturaleza instala complejos sistemas vitales de sucesivos cambios simples.<br><br>

    La conclusión es que los seres vivos "evolucionan" sin la intención o voluntad de un creador elegido o dispuesto que sepa lo que está haciendo.<br><br>

    Asegurémonos de estos pilares.<br><br>

    <h3>Asegúrate</h3>
    1. Los organismos vivos nacieron de alguna manera a partir de objetos inanimados.<br>
    Este es un mito que cayó a través de experimentos, el más famoso de los cuales fue el experimento de Francesco Redi, dos siglos antes de Darwin. Demostró que los organismos que se creía que se autogeneraban a partir de objetos inanimados, como restos de comida, procedían del exterior del material, de alimentos con aire contaminado.<br><br>

    La verdad es que la autogeneración es originalmente ilógica. Es imposible imaginar un ser vivo que surja automáticamente de objetos inanimados. ¡Pero insistieron en intentarlo! Lo intentaron y la superstición fue destruida por la ciencia empírica y la mente.<br><br>


    2. La naturaleza dota al organismo de nuevas características:<br>
    Este es también un mito que desapareció con los descubrimientos de Gregor Mendel, quien demostró, años después de Darwin, que las características hereditarias de los niños no se desvían de las que originalmente tenían los padres. También cayó con los descubrimientos de la epigenética, que demostró que los factores externos y ambientales pueden cambiar la forma en que se lee el material genético en un organismo para activar un rasgo o extinguir un rasgo que estaba activado, pero no agrega material genético que no estaba originalmente. presente.<br><br>


    3. Los rasgos adquiridos se heredan y la naturaleza los selecciona de forma acumulativa hasta llegar a seres superiores:<br>
    Como puedes imaginar, esto también es un mito caído. Los músculos del herrero y del carpintero, por ejemplo, no los heredan sus hijos. Sin embargo, los seguidores de Darwin insistieron en intentarlo. Weismann siguió cortando la cola de 19 generaciones de ratas, sólo para sorprenderse, después de un largo trabajo, con el nacimiento de sus crías con cola nuevamente. Esto significa que el rasgo adquirido, que es la cola cortada, no se transmitió a los hijos.<br><br>

    ¿Qué queda entonces de la teoría de Darwin?<br><br>

    4. La naturaleza instala complejos sistemas vitales de sucesivos cambios simples.<br>
    ¿Hasta que entiendas lo que significa la selección natural de Darwin? La vasta imaginación de Darwin le trajo la idea de que la naturaleza, el uso y el abandono; Los organismos antiguos produjeron estructuras corporales simples que podrían haber servido al organismo en algo, por lo que la selección natural las preservó. ¿Quién no sabía que la acumulación de estas estructuras produciría un órgano completo e integrado como un ala de un pájaro o un ojo de un animal?<br><br>

    <h2>Historia</h2>
    Para entender la lógica de Darwin, imaginemos una tierra llena de basura. Por él pasan un gran número de ciegos y cada uno de ellos recoge un trozo de basura al azar. Luego, ingresan a un gran edificio cuya puerta se cierra después de cada entrada.<br><br>

    <img src="./junk.png">

    Pasaron millones de años y los ciegos recogieron los restos, murieron y fueron enterrados bajo el suelo del edificio.<br>
    Un día, abriste la puerta del edificio y un avión Boeing gigante, conducido por un hombre ciego, salió corriendo por la puerta y voló hacia el cielo.<br>

    <img src="./air plane.png">

    Te preguntaste: ¡¿Cómo construyó el ciego el avión?! Se os dijo: ¡No tenía intención de hacerlo! Pero lo que pasó con el ciego antes que él es que quien recoge un trozo de chatarra útil para él; ¡Se mantuvo firme y se lo legó a su sucesor! Algunos cogieron un paño para protegerse del frío; otro cogió una plancha para protegerse del sol, y un tercero cogió un volante de avión con el que removían la comida mientras cocinaban, y un cuarto cogió una botella que utilizaban como escudo en su guerra contra sus enemigos ciegos. <br><br>

    Esto continuó en tiempos sucesivos, y legaron sus piezas a quienes les sucedieron, y las piezas fueron instaladas sin querer, ni por una acción activa hasta que de ellas se formó este gran plano que vi!<br><br>

    Así que ¡cuidado con la ilusión de que alguien pretendía que un avión se formara o volara!<br><br>
    Por el mismo razonamiento, Darwin consideró que la selección natural ha reparado ciegamente las estructuras de los organismos. Por ejemplo, las alas de los pájaros para ayudarles a volar son un "pseudopropósito". ¡Significa una meta imaginaria, no real! Y el ojo es un objetivo imaginario porque no hay ningún hacedor intencionado elegido que haya tenido la intención de que el ojo vea o que el ala aletee. ¡Más bien, todo esto vino con acumulaciones de coincidencias ciegas!<br>

    Este es el chiste de la selección natural ciega que inventó Darwin, y es -además de su absurdo para toda mente sana- que los descubrimientos científicos han demostrado su imposibilidad con la existencia de una complejidad irreductible en todos los detalles de los organismos y sus relaciones. . Es decir, las estructuras y miembros de los organismos vivos son extremadamente complejos e integrados de modo que sólo pueden existir con la disponibilidad de sus partes al mismo tiempo. De lo contrario, no cumplirán su función. Por lo tanto, no son susceptibles en absoluto a la idea de una formación gradual, ni siquiera al nivel de la unidad de vida más pequeña.<br><br>

    ¡Darwin no vio la célula bajo el microscopio en sus días excepto como un simple frotis!<br><br>

    La selección natural descrita por Darwin también es un mito.<br><br>

    Basándose en estas supersticiones infundadas sobre la razón, los sentidos y la experiencia, Darwin construyó la idea más absurda y estúpida de la historia. ¡Todo lo que vemos de juicio y dominio en esta creación vino por casualidad sin intención y no necesita conocimiento ni sabiduría!<br><br>

    Después de ver la invalidez de esta teoría, debes confiar en que el universo no puede ser creado por casualidad y también confiar en que "debe haber un Dios".<br><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=x0jw56ylJOE&list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc&index=24">Más información (evolución) [Video - Subtítulos en español].</a><br>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc">Más información [Lista de reproducción - En subtítulos] (Comience desde el primer video o video número 24 en la Lista de reproducción hasta el final).</a>
</div>

<div class="part">
    <h1>Parte 3: Encontrar la religión adecuada</h1>
    Convengamos en que cualquier religión creada por humanos es errónea porque la religión debe provenir de Dios y la religión correcta no debe haber sido tergiversada. Ahora tenemos tres religiones monoteístas: el judaísmo, el cristianismo y el islam.<br><br>

    🔷 Primero está el judaísmo:<br>
    Para ser judío, debes ser de su familia. Absolutamente, esta religión es nula porque no es justo si quieres adorar a Dios que te creó y no puedes hacerlo porque no eres de su familia.<br><br>

    🔷 En segundo lugar está el cristianismo:<br>
    <ul>
        <li>En el cristianismo, debes creer que Dios es tres Dioses: Padre, Hijo y Espíritu Santo. Esta idea sobre Dios fue hecha por algunos sacerdotes, pero ¿cómo existen tres Dioses? Si el Padre, el Hijo y el Espíritu Santo son dioses, entonces pueden controlar el universo. Pero el Hijo es humano y los humanos no pueden controlar el universo.</li><br>
        <li>El libro sagrado del cristianismo es la Biblia, y la Biblia ha sido tergiversada por los humanos. Espero que leas sobre "copias" de la Biblia y sus contradicciones y hay muchas traducciones de la Biblia, aunque el texto hebreo es el mismo. Por ejemplo, ¿cuándo tenía la edad de David cuando gobernaba? ¿Fue 1, 30 o 40?</li><br>
        <li>Si el Padre quiere que alguien muera a las 4 y el Hijo quiere que esa persona muera a las 5, entonces ¿qué pasa? ¿Esa persona morirá a los 4 o 5? Si la respuesta es 4, entonces el Hijo no es Dios. Si la respuesta es 5, entonces el Padre no es Dios porque Dios debe poder controlar el universo.</li><br>
        <li>En el cristianismo, hay una derogación de Dios. Hay una historia que cuenta que Jacob peleó con Dios, y este lo iba a matar. Pero estuvimos de acuerdo en que Dios debe ser perfecto sólo para Él, y Dios más fuerte en todo el universo porque Dios creó el universo.</li><br><br>
    
        <li>La quinta razón es:</li><br>
    
        <ul>
            <li>En el cristianismo, Dios envió a Jesús a la Tierra para ser crucificado y expiar el pecado de Adán. ¿Pero quién cometió pecado? ¿Adán o Jesús? ¿Cuál es el pecado de Jesús al ser crucificado y quién cometió el pecado, Adán?</li><br>
            <li>En el cristianismo, Jesús fue crucificado para expiar el pecado en nombre de Adán. ¡Y quién vino después de Jesús pero murió antes de la muerte de Jesús, murió en pecado! ¿Cuál es el pecado de aquellos que vinieron antes que Jesús para morir en pecado, y por qué Jesús no descendió antes para expiar los pecados de más personas?</li><br>
            <li>¿Dónde dijo Jesús: "Yo soy Dios"? ¿Dónde buscó adoración para sí mismo? ¿Dónde dijo: "Yo soy Dios manifestado en carne"? ¿Dónde habló del pecado original? ¿Dónde dijo: "Yo soy Dios el Hijo"? ¿Dónde dijo: "Yo soy Dios la Palabra"? ¿Y dónde dijo: "Yo soy Dios, la segunda persona"?</li>
        </ul>
    </ul>
    
    <br>

    <a target="_blank" href="https://www.youtube.com/watch?v=M71t_GmkJ1g">Más información (cristianismo) [Video - Subtítulos en español].</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=7iFCMs8jE8k">Más información (trinity) [Video - Subtítulos en español].</a><br>
    
    <br><br>

    Ahora tenemos la religión final, que es el Islam. Pero antes de continuar leyendo o escuchando, no confíes en los medios y las películas porque no revelarán toda la verdad del Islam. Sólo distorsionan la imagen del Islam en tu cerebro. No confíes en ellos. Busque la verdad usted mismo y saltemos a ella.
</div>

<div class="part">
    <h1>Parte 4: ¿Realmente conoces el Islam?</h1>
    El Islam es una religión que ordena adorar a Alá, el único Dios, sin pareja y obedecer a su profeta Mahoma - la paz sea con él -.<br>
    Para ser musulmán, dices los dos testimonios:<br>
    أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله ('ashhad 'an la 'iilah 'iilaa allah wa'ashhad 'ana muhamadan eabduh warasuluhu).<br>
    que significa: "Testifico que no hay más dios que Alá, y testifico que Mahoma es Su Profeta y Mensajero".<br><br>

    <a target="_blank" href="https://www.islam-guide.com/ch3-8.htm">Más información sobre el Profeta Mahoma - la paz sea con él - [artículo]</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=_JbKdKS9Yyg">Más información sobre el Profeta Mahoma - la paz sea con él - [Vídeo - Subtítulos en español]</a><br><br>

    El Islam es la religión que está de acuerdo con la naturaleza humana. Es la religión que exige adorar al único Dios que es Alá.<br><br>

    Allah es el Dios de todo el universo. Allah es perfecto sólo para Él, no hay semejanza con Él y nadie es similar a Él. Debes adorarlo solo a Él.<br><br>

    Ahora háganos saber los pilares del Islam que lo hacen musulmán:<br>
    1. Dos testimonios<br>
    2. Las cinco Oraciones<br>
    3. Pagar el Zakat<br>
    4. Ayuno en Ramadán<br>
    5. Hayy<br><br>

    El cuarto es el ayuno en Ramadán. El Ramadán es un mes Hijri en el que se debe dejar de comer y beber desde el Fajr hasta el Magreb y donde hay una noche llamada Noche de Al-Qadr. Quien lo gane, mejor le será que mil meses.<br>

    <h3>Aqida (creencia musulmana)</h3>
    El musulmán cree en Alá, Señor de los cielos y la tierra. Maestro de todo lo que existe. El Señor de Ibrahim. Se nos han enviado mensajeros y revelaciones desde la época de nuestro padre Adán hasta el último de los profetas, Mahoma, que la paz y las bendiciones sean con él. Vino con la revelación final. La palabra "رب العالمين" significa Señor de los Mundos. “Todo lo que hay en los cielos y todo lo que hay en la tierra glorifica a Allah. “Y Él es el Fuerte, el Sabio” 59:1<br><br>

    Incluso si las personas no creen en Allah y adoran a otra persona, eso no cambia el hecho de que son Su creación y que Él es quien puede guiarlos al camino recto (Islam) o condenarlos a no creer en Él. Revelación después de mostrarles que esta es la verdad. Esta es la creencia musulmana.<br><br>

    
    
    <h3>Sharia (leyes)</h3>
    Un musulmán no utiliza la “benigna” ley Sharia en los países islámicos. Más bien, utilice la ley Sharia. La Sharia es la definición de las leyes celestiales que Allah nos ha ordenado seguir, como la oración, el ayuno, la caridad, los buenos modales, el uso del hijab y la construcción de buenas relaciones con las personas con las que vivimos, los vecinos y los ancianos, son todas parte de Sharía. La Sharia también cubre la gobernanza, la política, el sistema judicial, la aplicación de la ley y muchos otros aspectos de la vida. El Islam es la forma de vida y cubre todos los asuntos necesarios de la vida para que podamos vivir y gobernarnos a nosotros mismos para satisfacción de Allah.<br><br>
   
    En el Islam, haces que las reglas de Alá te controlen en tu vida, ya que no debes hacer nada prohibido o tabú, y si crees que no es libertad, por ejemplo, si tu hijo fue al mercado y quiere comerse todos los chocolates en el mercado, tú lo detendrá ¿verdad? ¿entonces lo quieres sin libertad, o sabes que si lo hace se lastimará?<br><br>

    Allah creó el universo y sabe qué cosas nos hacen daño, y Allah creó el mundo como un lugar de aflicción y fatiga, no un lugar de recompensa.<br><br>

    <h3>Orar</h3>
    Las oraciones cambian para cada país debido a los cambios estacionales, pero si vives en una región como Medio Oriente, África del Norte y África Oriental, las oraciones diarias se establecen en momentos específicos y nunca cambian. Se trata más de la hora del día. Por ejemplo: oración del Fajr antes del amanecer, alrededor del amanecer. No está permitido rezarlo tan pronto como sale el sol, luego llega el mediodía, la tarde, después del atardecer y luego la noche. Si cambia la hora de salida y puesta del sol, cambia la hora de oración.<br><br>

    <h3>Corán</h3>
    En el Islam, el libro sagrado es el Corán, que son las palabras de Alá. El Corán fue revelado en idioma árabe en un país árabe cuando los árabes eran más elocuentes, desafiando a todos los árabes en su elocuencia y sus hermosas palabras, y hasta ahora, nada como El Corán ha sido escrito en su elocuencia y la Sura es una parte del Corán.<br><br>
    
    <a target="_blank" href="https://www.youtube.com/watch?v=TGuZMLhyRXg">Más información (¡¿Alguien hizo una Sura como el Corán?!) [Video en inglés]</a><br><br>

    El Corán no está tergiversado y puede asegurarse de ello buscando sobre el Corán más antiguo, no hay diferencia entre este y el Corán más reciente (excepto la fuente), y lo que aumenta su certeza es... El Corán es un audiolibro antes de ser. un libro escrito y existe el permiso para leer el Sagrado Corán, que es una cadena continua desde la persona que domina la lectura del Corán hasta el Profeta Mahoma - La paz sea con él -<br><br>

    El Corán puede traducirse a cualquier otro idioma del mundo para que la gente entienda lo que lee, pero Alá envió la revelación en árabe, por lo que el único idioma árabe puede considerarse la "revelación". Otros serán simplemente una traducción del Corán. El 80% de los musulmanes no son árabes, pero aún pueden recitar y comprender el Corán y recitar el Corán en la oración diaria. Sin embargo, si quieres vivir la experiencia completa, debes aprender árabe porque la mayoría de las fuentes islámicas están en árabe.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=mJyNYxPEiMw">Aprende árabe y Corán (vídeo en inglés de la hoja de ruta)</a><br>
    <a target="_blank" href="https://arabic101.org/wp-content/uploads/woocommerce_uploads/2023/03/quran-quest_2.pdf">Aprende árabe y Corán (Hoja de ruta en inglés, PDF)</a><br>

    <h3>Zakat</h3>
    En el Islam no existe ningún impuesto impuesto por el gobierno. No debería haber impuestos porque es un concepto antiislámico. Si un no musulmán desea vivir bajo un gobierno islámico, paga la jizya, que es un impuesto para los no musulmanes que les brinda seguridad y protección, así como acceso a los mismos servicios y privilegios que los musulmanes. En cuanto al musulmán, hace algo obligatorio en el Islam llamado zakat. A los musulmanes se les exige pagar anualmente el 2,5% de nuestra riqueza a los pobres, mientras que la jizya es mucho menos que el zakat. Esto mejora la sociedad y compensa la falta de recursos y privilegios entre pobres y ricos, al tiempo que se fortalecen mutuamente. No está permitido que un musulmán reciba zakat de otros musulmanes a menos que lo necesite. Por lo tanto, hubo momentos en la historia en los que los gobernantes islámicos no tenían gente pobre a quien alimentar y la población se quejaba de quién daba limosna.<br>
</div>

<div class="part">
    Coming Soon...
</div>
`,


// german
`
<h1 class="title">Die Wahrheit</h1>

<div class="part">
    Hallo zusammen, ich hoffe, dass Sie diesen Artikel bis zum Ende lesen, denn er ist sehr wichtig. Lasst uns darauf eingehen.

    <br><br>
    <h1>Teil 1: Es muss einen Gott geben</h1>
    Wir sind uns einig, dass alles, was passiert, eine Ursache hat. Wenn Sie beispielsweise jemand schlägt, verspüren Sie Schmerzen. Auf dieser Grundlage kommen wir zu dem Schluss, dass jedes geschaffene Ding einen Schöpfer hat, jede Maschine einen Schöpfer hat, jedes Haus von einem Schöpfer gebaut wurde und das Universum Gott hat. Das liegt daran, dass alles, was passiert, eine Ursache hat.<br><br>

    <img src="./universe.png">

    Wenn Sie denken, dass das Universum durch den Urknall entstanden ist, liegen Sie falsch. Wenn Sie sagen, dass der Anfang des Universums eine sehr kleine Sache ist, dann haben Sie die Frage „Wer hat diese kleine Sache erschaffen?“ nicht beantwortet. Und die Antwort ist absolut Gott. Gott muss vollkommen sein, um das Universum allein zu erschaffen, und es gibt keine Ähnlichkeit mit Ihm, und niemand ist Ihm ähnlich, weil Gott uns und die gesamte Kreativität im Universum geschaffen hat. Du musst Ihn allein anbeten, weil Er dich erschaffen hat. Wenn Sie glauben, dass wir durch Zufall durch Evolution erschaffen wurden, liegen Sie falsch, denn...
</div>

<div class="part">
    <h1>Teil 2: Evolution</h1>
    Zunächst möchte ich Sie wissen lassen, dass das Universum fein abgestimmt ist und dass der Zufall dieses abgestimmte Universum nicht erschaffen kann. Zweitens, lassen Sie uns die vier Säulen der Evolutionstheorie kennen.<br><br>

    <h3>Theoriepfeiler</h3>
    1. Lebende Organismen wurden auf irgendeine Weise aus unbelebten Objekten geboren.<br>
    2. Die Natur verleiht Organismen neue Eigenschaften, die sie von einer Art in eine andere verwandeln können.<br>
    3. Erworbene Eigenschaften werden vererbt, und die Natur selektiert kumulativ bis hin zu höheren Wesen.<br>
    4. Die Natur installiert komplexe lebenswichtige Systeme aufeinanderfolgender einfacher Veränderungen.<br><br>

    Die Schlussfolgerung ist, dass Lebewesen ohne die Absicht oder den Willen eines auserwählten oder willigen Schöpfers „entwickelt“ werden, der weiß, was er tut.<br><br>

    Sorgen wir für diese Säulen.<br><br>

    <h3>Stellen Sie sicher</h3>
    1. Lebende Organismen wurden auf irgendeine Weise aus unbelebten Objekten geboren.<br>
    Dies ist ein Mythos, der durch Experimente zerfiel, von denen das berühmteste das Experiment von Francesco Redi zwei Jahrhunderte vor Darwin war. Er bewies, dass die Organismen, von denen angenommen wurde, dass sie aus unbelebten Objekten wie Essensresten selbst erzeugt wurden, von außerhalb des Materials stammten, d. h. aus Nahrungsmitteln mit verschmutzter Luft.<br><br>

    Die Wahrheit ist, dass Selbstgenerierung ursprünglich unlogisch ist. Es ist unmöglich, sich ein Lebewesen vorzustellen, das automatisch aus unbelebten Objekten entsteht. Aber sie bestanden darauf, es zu versuchen! Sie versuchten es, und der Aberglaube wurde durch die empirische Wissenschaft und den Verstand zerstört.<br><br>


    2. Die Natur verleiht dem Organismus neue Eigenschaften:<br>
    Dies ist auch ein Mythos, der mit den Entdeckungen von Gregor Mendel zunichte gemacht wurde, der – Jahre nach Darwin – bewies, dass die erblichen Merkmale von Kindern nicht von denen abweichen, die ursprünglich bei den Eltern vorhanden waren. Es fiel auch mit den Entdeckungen der Epigenetik, die zeigten, dass äußere und Umweltfaktoren die Art und Weise verändern können, wie genetisches Material in einem Organismus gelesen wird, um ein Merkmal zu aktivieren oder ein aktiviertes Merkmal auszulöschen, aber kein genetisches Material hinzufügt, das ursprünglich nicht vorhanden war vorhanden.<br><br>


    3. Erworbene Eigenschaften werden vererbt, und die Natur selektiert kumulativ bis hin zu höheren Wesen:<br>
    Wie Sie vermuten, ist dies auch ein gefallener Mythos. Die Muskeln des Schmieds und des Zimmermanns zum Beispiel werden nicht von ihren Kindern vererbt. Darwins Anhänger bestanden jedoch darauf, es zu versuchen. Weismann schnitt 19 Rattengenerationen immer wieder den Schwanz ab, nur um nach langer Mühe überrascht zu werden, dass wieder Nachkommen mit Schwänzen zur Welt kamen. Das bedeutet, dass das erworbene Merkmal, der abgetrennte Schwanz, nicht an die Kinder weitergegeben wurde.<br><br>

    Was ist dann von Darwins Theorie übrig geblieben?<br><br>

    4. Die Natur installiert komplexe lebenswichtige Systeme aufeinanderfolgender einfacher Veränderungen.<br>
    Bis Sie verstehen, was Darwins natürliche Selektion bedeutet? Darwins große Vorstellungskraft brachte ihn auf die Idee, dass Natur, Nutzung und Vernachlässigung; Alte Organismen produzierten einfache Körperstrukturen, die dem Organismus bei irgendetwas hätten dienen können, weshalb sie durch natürliche Selektion erhalten blieben. Wer hätte nicht gewusst, dass die Anhäufung dieser Strukturen ein vollständiges und integriertes Organ hervorbringen würde, etwa einen Flügel für einen Vogel oder ein Auge für ein Tier?<br><br>

    <h2>Geschichte</h2>
    Um Darwins Logik zu verstehen, stellen Sie sich ein Land voller Müll vor. Viele Blinde gehen hindurch, und jeder von ihnen nimmt aufs Geratewohl ein Stück Müll auf. Dann betreten sie ein großes Gebäude, dessen Tür nach jedem Eintritt geschlossen wird.<br><br>

    <img src="./junk.png">

    Millionen von Jahren vergingen, und die Blinden sammelten die Reste ein, starben und wurden unter der Erde des Gebäudes begraben.<br>
    Eines Tages öffneten Sie das Tor des Gebäudes und ein riesiges Boeing-Flugzeug, gesteuert von einem Blinden, raste aus dem Tor und flog in den Himmel!<br>

    <img src="./air plane.png">

    Sie haben sich gefragt: Wie hat der Blinde das Flugzeug gebaut?! Ihnen wurde gesagt: Er hatte nicht vor, es zu schaffen! Aber was mit dem Blinden vor ihm geschah, ist, dass jeder, der ein nützliches Stück Schrott für ihn aufhebt; er blieb standhaft und vermachte es seinem Nachfolger! Einige von ihnen griffen nach einem Tuch, um sich vor der Kälte zu schützen; ein anderer nahm ein Glätteisen, um sich vor der Sonne zu schützen, und ein dritter nahm ein Flugzeuglenkrad, mit dem sie beim Kochen ihr Essen umrührten, und ein vierter nahm eine Flasche, die sie als Schutzschild im Krieg gegen ihre blinden Feinde benutzten! <br><br>

    Dies setzte sich in aufeinanderfolgenden Zeiten fort, und sie vermachten ihre Teile ihren Nachfolgern, und die Teile wurden unbeabsichtigt oder durch eine aktive Aktion installiert, bis diese große Ebene, die ich sah, daraus geformt wurde!<br><br>

    Hüten Sie sich also vor der Illusion, dass jemand beabsichtigte, dass ein Flugzeug entsteht oder fliegt!<br><br>
    Mit derselben Argumentation ging Darwin davon aus, dass die natürliche Selektion die Strukturen von Organismen blindlings zusammengeflickt hat. Beispielsweise sind die Flügel von Vögeln, die ihnen beim Fliegen helfen sollen, ein „Pseudozweck“. Es bedeutet ein imaginäres Ziel, kein reales! Und das Auge ist ein imaginäres Ziel, weil es keinen auserwählten willensstarken Täter gibt, der beabsichtigt hat, dass das Auge sieht oder dass der Flügel flattert. Vielmehr war dies alles eine Anhäufung blinder Zufälle!<br>

    Das ist der Witz der blinden natürlichen Selektion, den sich Darwin ausgedacht hat, und es ist – zusätzlich zu seiner Absurdität für jeden gesunden Geist –, dass wissenschaftliche Entdeckungen ihre Unmöglichkeit mit der Existenz irreduzibler Komplexität in allen Details von Organismen und ihren Beziehungen bewiesen haben . Das heißt, die Strukturen und Mitglieder lebender Organismen sind äußerst komplex und integriert, sodass sie nur dann existieren können, wenn ihre Teile gleichzeitig verfügbar sind. Andernfalls erfüllen sie ihre Funktion nicht. Daher sind sie der Idee einer schrittweisen Bildung überhaupt nicht zugänglich, selbst auf der Ebene der kleinsten Wohneinheit.<br><br>

    Darwin sah die Zelle zu seiner Zeit unter dem Mikroskop nur als einfachen Abstrich!<br><br>

    Auch die natürliche Auslese, wie sie Darwin beschreibt, ist ein Mythos.<br><br>

    Basierend auf diesem unbegründeten Aberglauben von Vernunft, Sinn und Erfahrung entwickelte Darwin die absurdeste und dümmste Idee der Geschichte. Alles, was wir in dieser Schöpfung an Urteilsvermögen und Meisterschaft sehen, kam zufällig und ohne Absicht und erfordert weder Wissen noch Weisheit!<br><br>

    Nachdem Sie die Ungültigkeit dieser Theorie erkannt haben, müssen Sie darauf vertrauen, dass das Universum nicht durch Zufall erschaffen werden kann, und auch darauf vertrauen, dass „es einen Gott geben muss“.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=x0jw56ylJOE&list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc&index=24">Mehr erfahren (Evolution) [Video – deutsche Untertitel].</a><br>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc">Mehr erfahren [Playlist – Deutsche Untertitel] (Beginnen Sie mit dem ersten Video oder Videonummer 24 in der Playlist bis zum Ende) .</a>
</div>

<div class="part">
    <h1>Teil 3: Die richtige Religion finden</h1>
    Wir sind uns darüber einig, dass jede von Menschen geschaffene Religion falsch ist, denn die Religion muss von Gott stammen und die richtige Religion darf nicht falsch dargestellt worden sein. Wir haben jetzt drei monotheistische Religionen: Judentum, Christentum und Islam.<br><br>

    🔷 Zuerst ist das Judentum:<br>
    Um Jude zu sein, muss man aus ihrer Familie stammen. Absolut, diese Religion ist ungültig, weil es nicht fair ist, wenn Sie Gott anbeten wollen, der Sie erschaffen hat, und das nicht können, weil Sie nicht aus ihrer Familie stammen.<br><br>

    🔷 An zweiter Stelle steht das Christentum:<br>
    <ul>
        <li>Im Christentum müssen Sie glauben, dass Gott aus drei Göttern besteht: Vater, Sohn und Heiliger Geist. Diese Vorstellung von Gott wurde von einigen Priestern gemacht, aber wie gibt es drei Götter? Wenn Vater, Sohn und Heiliger Geist Götter sind, dann können sie das Universum kontrollieren. Aber der Sohn ist ein Mensch und der Mensch kann das Universum nicht kontrollieren.</li><br>
        <li>Das heilige Buch des Christentums ist die Bibel, und die Bibel wurde von Menschen falsch dargestellt. Ich hoffe, Sie lesen etwas über „Kopien“ der Bibel und ihre Widersprüche, und es gibt viele Übersetzungen der Bibel, obwohl der hebräische Text derselbe ist. Zum Beispiel: Wann war David alt, als er regierte? War es 1, 30 oder 40?</li><br>
        <li>Wenn der Vater möchte, dass jemand mit 4 Jahren stirbt, und der Sohn möchte, dass diese Person mit 5 Jahren stirbt, was passiert dann? Wird diese Person mit 4 oder 5 sterben? Wenn die Antwort 4 ist, dann ist der Sohn nicht Gott. Wenn die Antwort 5 ist, dann ist der Vater nicht Gott, weil Gott in der Lage sein muss, das Universum zu kontrollieren.</li><br>
        <li>Im Christentum gibt es eine Abweichung von Gott. Es gibt eine Geschichte, die erzählt, dass Jakob gegen Gott kämpfte und ihn töten wollte. Aber wir waren uns einig, dass Gott nur für Ihn vollkommen sein muss und dass Gott der Stärkste im gesamten Universum sein muss, weil Gott das Universum erschaffen hat.</li><br><br>
    
        <li>Der fünfte Grund ist:</li><br>
    
        <ul>
            <li>Im Christentum sandte Gott Jesus auf die Erde, um ihn zu kreuzigen und Adams Sünde zu sühnen. Aber wer hat gesündigt? Adam oder Jesus? Was ist die Sünde Jesu, gekreuzigt zu werden, und wer hat die Sünde begangen, Adam?</li><br>
            <li>Im Christentum wurde Jesus gekreuzigt, um im Namen Adams Sünden zu sühnen. Und wer nach Jesus kam, aber vor dem Tod Jesu starb, starb in Sünde! Was ist die Sünde derer, die vor Jesus kamen, um in Sünde zu sterben, und warum ist Jesus nicht schon früher herabgekommen, um die Sünden von mehr Menschen zu sühnen?</li><br>
            <li>Wo sagte Jesus: „Ich bin Gott“? Wo suchte er Anbetung für sich selbst? Wo hat er gesagt: „Ich bin Gott, der im Fleisch erscheint“? Wo hat er über die Erbsünde gesprochen? Wo hat er gesagt: „Ich bin Gott, der Sohn“? Wo hat er gesagt: „Ich bin Gott, das Wort“? Und wo hat er gesagt: „Ich bin Gott, die zweite Person“?</li>
        </ul>
    </ul>
    
    <br>

    <a target="_blank" href="https://www.youtube.com/watch?v=M71t_GmkJ1g">Mehr erfahren (Christentum) [Video – deutsche Untertitel].</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=7iFCMs8jE8k">Mehr erfahren (trinity) [Video – deutsche Untertitel].</a><br>
    
    <br><br>

    Jetzt haben wir die letzte Religion, den Islam. Aber bevor Sie weiterlesen oder zuhören, vertrauen Sie nicht den Medien und Filmen, denn sie werden nicht die volle Wahrheit des Islam enthüllen. Sie verzerren nur das Bild des Islam in Ihrem Gehirn. Vertraue ihnen nicht. Suchen Sie selbst nach der Wahrheit und lassen Sie uns darauf eingehen.
</div>

<div class="part">
    <h1>Teil 4: Kennen Sie den Islam wirklich?</h1>
    Der Islam ist eine Religion, die einem befiehlt, Allah, den einen Gott, ohne Partner anzubeten und seinem Propheten Mohammed – Friede sei mit ihm – zu gehorchen.<br>
    Um ein Muslim zu sein, sagen Sie die beiden Zeugnisse:<br>
    أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله ('ashhad 'an la 'iilah 'iilaa allah wa'ashhad 'ana muhamadan eabduh warasuluhu).<br>
    was bedeutet: „Ich bezeuge, dass es keinen Gott außer Allah gibt, und ich bezeuge, dass Mohammed sein Prophet und Gesandter ist.“<br><br>

    <a target="_blank" href="https://www.islam-guide.com/ch3-8.htm">Erfahren Sie mehr über den Propheten Mohammed – Friede sei mit ihm – [Artikel]</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=_JbKdKS9Yyg">Erfahren Sie mehr über den Propheten Mohammed – Friede sei mit ihm – [Video – deutsche Untertitel]</a><br><br>

    Der Islam ist die Religion, die mit der menschlichen Natur übereinstimmt. Es ist die Religion, die dazu aufruft, den einen Gott anzubeten, der Allah ist.<br><br>

    Allah ist der Gott des gesamten Universums. Allah ist für Ihn allein vollkommen, und es gibt keine Ähnlichkeit mit Ihm, und niemand ist Ihm ähnlich. Du musst Ihn allein anbeten.<br><br>

    Teilen Sie uns nun die Säulen des Islam mit, die Sie zum Muslim machen:<br>
    1. Zwei Zeugnisse<br>
    2. Die fünf Gebete<br>
    3. Zakat bezahlen<br>
    4. Fasten im Ramadan<br>
    5. Hadsch<br><br>

    Viertens ist das Fasten im Ramadan. Ramadan ist ein Hijri-Monat, in dem Sie vom Fajr bis zum Maghreb auf Essen und Trinken verzichten müssen und in dem es eine Nacht namens Nacht von Al-Qadr gibt. Wer es gewinnt, ist besser für ihn als tausend Monate.<br>

    <h3>Aqida (muslimischer Glaube)</h3>
    Der Muslim glaubt an Allah, den Herrn der Himmel und der Erde. Herr über alles, was existiert. Der Herr von Ibrahim. Boten und Offenbarungen wurden uns von der Zeit unseres Vaters Adam bis zum letzten der Propheten, Muhammad, Friede und Segen seien auf ihm, gesandt. Er kam mit der letzten Offenbarung. Das Wort „رب العالمين“ bedeutet Herr der Welten. „Alles, was in den Himmeln und auf der Erde ist, verherrlicht Allah. „Und er ist der Mächtige, der Weise“ 59:1<br><br>

    Selbst wenn Menschen nicht an Allah glauben und jemand anderen anbeten, ändert das nichts an der Tatsache, dass sie Seine Schöpfung sind und dass Er derjenige ist, der sie auf den geraden Weg (Islam) führen oder sie dazu verurteilen kann, nicht an Ihn zu glauben. Offenbarung, nachdem ihnen gezeigt wurde, dass dies die Wahrheit ist. Das ist der muslimische Glaube.<br><br>

   
   
    <h3>Scharia (Gesetze)</h3>
    Ein Muslim wendet das „gutartige“ Scharia-Gesetz in islamischen Ländern nicht an. Eher aber nutzen Sie das Scharia-Gesetz. Die Scharia ist die Definition der himmlischen Gesetze, zu deren Befolgung Allah uns befohlen hat, wie etwa Gebet, Fasten, Almosen, gute Manieren, das Tragen des Hijab und der Aufbau guter Beziehungen zu den Menschen, mit denen man zusammenlebt, Nachbarn und älteren Menschen Scharia. Die Scharia umfasst auch Regierungsführung, Politik, das Justizsystem, die Strafverfolgung und viele andere Aspekte des Lebens. Der Islam ist die Lebensweise und deckt alle notwendigen Lebensangelegenheiten ab, damit wir zur Zufriedenheit Allahs leben und uns selbst regieren können.<br><br>
   
    Im Islam lässt du dich in deinem Leben von den Regeln Allahs leiten, da du nichts Verbotenes oder Tabu tun darfst, und wenn du denkst, dass es nicht Freiheit ist, also zum Beispiel, wenn dein Sohn auf den Markt gegangen ist und alle Pralinen auf dem Markt essen möchte wird ihn aufhalten, oder? Willst du ihn dann ohne Freiheit, oder weißt du, dass er sich selbst verletzen wird, wenn er das tut?<br><br>

    Allah hat das Universum erschaffen und Er weiß, welche Dinge uns schaden, und Allah hat die Welt als einen Ort des Kummers und der Ermüdung geschaffen, nicht als einen Ort der Belohnung.<br><br>

    <h3>Bete</h3>
    Aufgrund saisonaler Veränderungen ändern sich die Gebete für jedes Land. Wenn Sie jedoch in einer Region wie dem Nahen Osten, Nordafrika und Ostafrika leben, finden die täglichen Gebete zu bestimmten Zeiten statt und ändern sich nie. Es kommt mehr auf die Tageszeit an. Zum Beispiel: Fajr-Gebet vor Sonnenaufgang, etwa im Morgengrauen. Es ist nicht erlaubt, es zu beten, sobald die Sonne aufgeht, dann gibt es Mittag, Nachmittag, nach Sonnenuntergang und dann Abend. Wenn sich die Zeit von Sonnenaufgang und Sonnenuntergang ändert, ändert sich auch die Zeit des Gebets.<br><br>

    <h3>Koran</h3>
    Im Islam ist das heilige Buch der Koran, der die Worte Allahs darstellt. Der Koran wurde in arabischer Sprache in einem arabischen Land offenbart, als die Araber am beredtesten waren und alle Araber in seiner Beredsamkeit und seinen schönen Worten herausforderten. Und bisher gab es nichts Vergleichbares Der Koran wurde in seiner Beredsamkeit geschrieben und die Sure ist ein Teil des Korans.<br><br>
    
    <a target="_blank" href="https://www.youtube.com/watch?v=TGuZMLhyRXg">Erfahren Sie mehr (Jemand hat eine Sure wie den Koran gemacht?!) [Englisches Video]</a><br><br>

    Der Koran ist nicht falsch dargestellt und Sie können dies sicherstellen, indem Sie nach dem ältesten Koran suchen. Es gibt keinen Unterschied zwischen ihm und dem neuesten Koran (mit Ausnahme der Schriftart). Was Ihre Gewissheit erhöht, ist ... Der Koran ist ein Hörbuch, bevor er es ist ein geschriebenes Buch und es gibt so etwas wie die Erlaubnis, den Heiligen Koran zu lesen, was eine kontinuierliche Kette von der Person ist, die den Koran lesen kann, bis zum Propheten Mohammed – Friede sei mit ihm –<br><br>

    Der Koran kann in jede andere Sprache der Welt übersetzt und übersetzt werden, damit die Menschen verstehen, was sie lesen, aber Allah hat die Offenbarung in arabischer Sprache herabgesandt, sodass die einzige arabische Sprache als „Offenbarung“ betrachtet werden kann. Andere werden einfach eine Übersetzung des Korans sein. 80 % der Muslime sind Nicht-Araber, aber dennoch in der Lage, den Koran zu rezitieren und zu verstehen und ihn täglich im Gebet zu rezitieren. Wenn Sie jedoch die volle Erfahrung machen möchten, müssen Sie Arabisch lernen, da die meisten islamischen Quellen auf Arabisch sind.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=mJyNYxPEiMw">Lernen Sie Arabisch und den Koran (Roadmap English Video)</a><br>
    <a target="_blank" href="https://arabic101.org/wp-content/uploads/woocommerce_uploads/2023/03/quran-quest_2.pdf">Arabisch und Koran lernen (Roadmap Pdf)</a ><br>

    <h3>Zakat</h3>
    Im Islam gibt es überhaupt keine staatliche Steuer. Es sollte keine Steuern geben, weil es ein unislamisches Konzept ist. Wenn ein Nicht-Muslim unter einer islamischen Regierung leben möchte, zahlt er oder sie die Jizya, eine Steuer für Nicht-Muslime, um ihnen Sicherheit und Schutz sowie Zugang zu denselben Dienstleistungen und Privilegien wie Muslime zu geben. Was den Muslim betrifft, so tut er etwas, das im Islam verpflichtend ist und Zakat genannt wird. Muslime müssen jährlich 2,5 % unseres Vermögens an die Armen zahlen, während die Jizya viel weniger als die Zakat beträgt. Dies verbessert die Gesellschaft und gleicht den Mangel an Ressourcen und Privilegien zwischen Arm und Reich aus, während es sich gegenseitig stärkt. Es ist einem Muslim nicht gestattet, von anderen Muslimen Zakat anzunehmen, es sei denn, er benötigt sie. Daher gab es Zeiten in der Geschichte, in denen islamische Herrscher keine armen Menschen zu ernähren hatten und die Bevölkerung sich darüber beschwerte, wer Almosen gab.<br>
</div>

<div class="part">
    Coming Soon...
</div>
`,


// japan
`
<h1 class="title">真実</h1>

<div class="part">
     皆さんこんにちは、この記事はとても重要なことなので最後まで読んでいただければと思います。 飛びつきましょう。

     <br><br>
     <h1>パート 1: 神は必ずいる</h1>
     起こったことには必ず原因があるということに同意しましょう。 たとえば、誰かに殴られたら、痛みを感じます。 これに基づいて、すべての被造物には創造主がおり、すべての機械には創造主がおり、すべての家は創造主によって建てられ、宇宙には神がいると結論づけます。 なぜなら、起こることには必ず原因があるからです。<br><br>
    
     <img src="./universe.png">
    
     宇宙がビッグバンによって誕生したと考えているなら、それは間違いです。 宇宙の始まりはとても小さなものだとあなたが言うとき、「この小さなものを作ったのは誰ですか?」という質問にはまだ答えていないことになります。 そしてその答えは間違いなく神です。 神は宇宙を単独で創造するのに完璧でなければなりません。神に似ている人は一人もいません。神は私たちと宇宙のすべての創造性を創造したからです。 神があなたを創造されたのですから、あなたは神だけを崇拝しなければなりません。 私たちが進化によって偶然に創造されたと信じているなら、それは間違いです。なぜなら...
</div>

<div class="part">
    <h1>パート 2: 進化</h1>
    まず、宇宙は細かく調整されており、偶然によってこの調整された宇宙を作り出すことはできないことを知っていただきたいと思います。 次に、進化論の 4 つの柱を知っておきましょう。<br><br>

    <h3>理論の柱</h3>
    1. 生物は無生物から何らかの方法で誕生しました。<br>
    2. 自然は生物に、ある種から別の種に変化できる新しい特性を与えます。<br>
    3. 獲得した形質は継承され、自然は高次の存在に至るまで累積的に選択します。<br>
    4. 自然は、単純な変化が連続して複雑な生命システムを構築します。<br><br>

    結論は、生き物は、自分が何をしているのかを知っている選ばれた、または意欲的な創造者の意図や意志なしに「進化」するということです。<br><br>

    これらの柱を確認してみましょう。<br><br>

    <h3>必ず</h3>
    1. 生物は無生物から何らかの方法で誕生しました。<br>
    これは実験によって生まれた神話であり、最も有名なのはダーウィンの 2 世紀前に行われたフランチェスコ・レディの実験です。 彼は、食べ残しなどの無生物から自己生成したと考えられていた生物が、物質の外部から来たものであること、汚染された空気を含む食品であることを証明しました。<br><br>

    実は自己生成というのはもともと非論理的です。 無生物から自動的に生命体が生まれるなんて想像もできません。 しかし、彼らは挑戦することを主張しました！ 彼らは試みましたが、その迷信は経験科学と精神によって打ち破られました。<br><br>


    2. 自然は生物に新しい特性を与えます。<br>
    これは、ダーウィンの何年も後に、子供の遺伝的特徴が親の元々持っていたものから逸脱しないことを証明したグレゴール・メンデルの発見によって崩れた神話でもあります。 また、エピジェネティクスの発見とも一致します。エピジェネティクスは、外部要因と環境要因が、形質を活性化する、または活性化された形質を消滅させるために生物体内で遺伝物質が読み取られる方法を変える可能性があるが、元々存在しなかった遺伝物質を追加するわけではないことを示しました。 プレゼント。<br><br>


    3. 獲得した形質は継承され、自然はより高次の存在に至るまで累積的に選択します。<br>
    ご想像のとおり、これも崩れた神話です。 たとえば、鍛冶屋や大工の筋肉は、子供たちには受け継がれません。 しかし、ダーウィンの支持者たちは挑戦することを主張しました。 ワイズマンは 19 世代のネズミの尻尾を切り続けましたが、長い苦労の末、再び尻尾のある子孫が誕生したことに驚かされました。 これは、切断された尻尾という獲得形質が子供たちに受け継がれなかったことを意味します。<br><br>

    それではダーウィンの理論には何が残っているのでしょうか?<br><br>

    4. 自然は、単純な変化が連続する複雑な生命システムを構築します。<br>
    ダーウィンの自然選択が何を意味するのか理解するまで？ ダーウィンの広大な想像力は、自然、利用、そして無視という考えを彼にもたらしました。 古代の生物は、生物に何らかの役割を果たすことができる単純な身体構造を生成したため、自然選択によってそれらが保存されました。 これらの構造の蓄積により、鳥の翼や動物の目のような、完全で統合された器官が生成されることを知らなかった人はいないでしょうか?<br><br>

    <h2>ストーリー</h2>
    ダーウィンの論理を理解するには、ゴミでいっぱいの土地を想像してください。 大勢の目の見えない人々がそこを通り、それぞれががらくたをランダムに拾います。 次に、彼らは大きな建物に入ります。その建物は入るたびにドアが閉まります。<br><br>

    <img src="./junk.png">

    何百万年も経ち、盲人はスクラップを拾い上げ、死亡し、建物の地面の下に埋められました。<br>
    ある日、あなたがビルの門を開けると、目の見えない男性が運転する巨大なボーイング機が門から飛び出し、空へ飛んでいきました！<br>

    <img src="./air plane.png">

    あなたは疑問に思いました: 盲人はどうやって飛行機を作ったのでしょうか?! あなたにはこう言われました。「彼は成功するつもりはなかったのです！」 しかし、目の前の盲人に何が起こったかというと、誰が彼のために有用なスクラップを拾ったとしても、それは誰であろうとも同じです。 彼は毅然とした態度をとり、それを後継者に遺贈したのです！ 寒さから身を守るために布を手に取った人もいました。 ある人は日よけにアイロンを手に取り、3人目は調理中に食べ物をかき混ぜるための飛行機のハンドルを手に取り、4人目は目の見えない敵との戦いで盾として使った瓶を手に取りました。 <br><br>

    これは何度も続き、彼らは自分の作品を後継者に遺贈しました。そして、その作品は意図せずに、または私が見たこの偉大な飛行機がそこから形成されるまで、積極的な行動によってではなく設置されました。<br><br>

    したがって、誰かが飛行機の形成や飛行を意図したという妄想には気をつけてください。<br><br>
    同じ推論により、ダーウィンは自然選択が生物の構造を盲目的に取り繕ってきたと考えました。 たとえば、鳥が飛ぶのを助けるための翼は「擬似目的」です。 それは現実の目標ではなく、想像上の目標を意味します。 そして、目は想像上の対象です。なぜなら、目で見ることや翼を羽ばたかせることを意図した、選ばれた意図的な行為者が存在しないからです。 むしろ、これらすべては盲目的な偶然の積み重ねによって起こりました。<br>

    これはダーウィンが考え出した盲目的な自然選択のジョークであり、健康な精神すべてにとってその不条理に加えて、生物とその関係の細部すべてに還元不可能な複雑性が存在するという科学的発見が不可能であることを証明しているということである。 。 つまり、生物の構造と構成要素は非常に複雑で統合されており、一度にそれらの部分が利用できる場合にのみ存在することができます。 そうしないと、その機能が果たせなくなります。 したがって、最小の生物単位のレベルであっても、段階的形成という考えにはまったく従いません。<br><br>

    ダーウィンは当時、単なる塗抹標本としてしか細胞を顕微鏡で見ることはありませんでした。<br><br>

    ダーウィンが描いた自然選択も神話です。<br><br>

    理性、感覚、経験のこれらの根拠のない迷信に基づいて、ダーウィンは歴史上最も不条理で愚かなアイデアを構築しました。 この創造物において私たちが目にする判断や熟達はすべて、意図せずに偶然に生じたものであり、知識や知恵は必要ありません。<br><br>

    この理論が無効であることを理解した後、あなたは宇宙が偶然に創造されることはあり得ないことを信頼し、また「神は必ず存在する」ことを信頼しなければなりません。<br><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=x0jw56ylJOE&list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc&index=24">詳細 (進化) [ビデオ - 日本語字幕]。</a><br>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc">さらに詳しく [プレイリスト - 日本字幕] (プレイリストの最初のビデオまたはビデオ番号 24 から最後まで)。</a>
</div>

<div class="part">
    <h1>パート 3: 適切な宗教を見つける</h1>
    宗教は神から出たものでなければならず、正しい宗教が誤って伝えられてはいけないため、人間が作った宗教はすべて間違っていることに同意しましょう。 現在、ユダヤ教、キリスト教、イスラム教という 3 つの一神教があります。<br><br>

    🔷 まずはユダヤ教です:<br>
    ユダヤ人であるためには、彼らの家族の出身でなければなりません。 絶対に、この宗教は無効です。あなたを創造した神を崇拝したいのに、その家族の出身ではないという理由で崇拝できないのは不公平だからです。<br><br>

    🔷 2 番目はキリスト教です:<br>
    <ul>
        <li>キリスト教では、神は父、子、聖霊の 3 人の神であると信じなければなりません。 神についてのこの考えは一部の聖職者によって作られたものですが、どうして三人の神が存在するのでしょうか? 父と子と聖霊が神であれば、彼らは宇宙を支配することができます。 しかし、御子は人間であり、人間が宇宙をコントロールすることはできません。</li><br>
        <li>キリスト教の聖典は聖書ですが、聖書は人間によって誤って伝えられてきました。 聖書の「コピー」とその矛盾について読んでいただければ幸いです。ヘブライ語本文は同じですが、聖書には多くの翻訳があります。 例えば、ダビデが統治していたときの年齢はいつでしたか。 1、30、または 40 でしたか？</li><br>
        <li>父親が誰かが 4 歳で死ぬことを望んでいて、息子がその人が 5 歳で死ぬことを望んでいる場合、どうなりますか? その人は4歳か5歳で死ぬでしょうか？ 答えが 4 の場合、息子は神ではありません。 答えが 5 の場合、神は宇宙を制御できるはずなので、父は神ではありません。</li><br>
        <li>キリスト教では神からの侮辱があります。 ヤコブが神と戦い、神が神を殺そうとしたという話があります。 しかし、私たちは、神がご自身にとって完璧である必要があり、神が宇宙を創造されたので全宇宙の中で最強でなければならないということに同意しました。</li><br><br>
    
        <li>5 番目の理由は次のとおりです。</li><br>
    
        <ul>
            <li>キリスト教では、神はアダムの罪を償うために十字架につけられるようイエスを地上に送りました。 しかし、誰が罪を犯したのでしょうか？ アダムかイエスか？ 十字架につけられたイエスの罪とは何ですか？また、罪を犯したのは誰ですか、アダム？</li><br>
            <li>キリスト教では、イエスはアダムに代わって罪を償うために十字架につけられました。 そして、イエスの後に来て、イエスの死の前に死んだ者は、罪の中で死んだのです！ イエスの前に来て罪のうちに死んだ人々の罪は何ですか?なぜイエスはより多くの人々の罪を償うためにその前に降りてこなかったのですか?</li><br>
            <li>イエスはどこで「私は神です」と言いましたか? 彼はどこに自分自身の崇拝を求めたのでしょうか？ 彼はどこで「私は肉体に現れた神である」と言いましたか？ 彼はどこで原罪について話しましたか？ 彼はどこで「私は子なる神である」と言いましたか？ 彼はどこで「私は言葉なる神である」と言いましたか？ そして、彼はどこで「私は神、二人称です」と言ったのでしょうか?</li>
        </ul>
    </ul>
    
    <br>

    <a target="_blank" href="https://www.youtube.com/watch?v=M71t_GmkJ1g">もっと詳しく (キリスト教) [ビデオ - 日本語字幕]。</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=7iFCMs8jE8k">詳細 (トリニティ) [ビデオ - 日本字幕]。</a><br>
    
    <br><br>

    さて、最後の宗教はイスラム教です。 しかし、読んだり聞いたりする前に、メディアや映画を信用しないでください。メディアや映画はイスラム教の完全な真実を明らかにするものではないからです。 それらはあなたの脳内のイスラム教のイメージを歪めるだけです。 彼らを信用しないでください。 真実を自分で探して、そこに飛び込みましょう。
</div>

<div class="part">
    <h1>パート 4: イスラム教を本当に知っていますか?</h1>
    イスラム教は、パートナーを持たずに唯一の神であるアッラーを崇拝し、彼の預言者ムハンマド（彼の上に平安あれ）に従うことを命じる宗教です。<br>
    イスラム教徒であるためには、次の 2 つの証言をする必要があります。<br>
    أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله (「アシュハド アン ラ イーラ イーラ アッラー ワアシュハド アナ ムハマダン エアブドゥ ワラスルフ)」.<br>
    これは意味します。「私はアッラー以外に神はいないと証言します。そしてムハンマドがアッラーの預言者であり使徒であることを証言します。」<br><br>

    <a target="_blank" href="https://www.islam-guide.com/ch3-8.htm">預言者ムハンマドについて詳しく学ぶ - 彼の上に平安あれ - [記事]</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=_JbKdKS9Yyg">預言者ムハンマドについて詳しく学ぶ - 彼の上に平安あれ - [ビデオ - 日本語字幕]</a><br><br>

    イスラム教は人間の本質と一致する宗教です。 それはアッラーである唯一の神を崇拝することを求める宗教です。<br><br>

    アッラーは全宇宙の神です。 アッラーは彼だけにとって完全であり、彼に似たものはなく、彼に似ている者も誰もいません。 あなたは彼だけを崇拝しなければなりません。<br><br>

    ここで、あなたをイスラム教徒たらしめているイスラム教の柱を教えてください。<br>
    1. 二人の証言<br>
    2. 5つの祈り<br>
    3. ザカートの支払い<br>
    4. ラマダン中の断食<br>
    5.ハッジ<br><br>

    4つ目はラマダン中の断食です。 ラマダンはヒジュラ月で、ファジルからマグレブまで飲食を禁止しなければならず、アル・カドルの夜と呼ばれる夜があります。 誰が勝っても、その人にとっては千か月よりも良いことだ。<br>

    <h3>アキダ (イスラム教徒の信仰)</h3>
    イスラム教徒は天と地の主アッラーを信じます。 存在するすべてのもののマスター。 イブラヒムの主。 私たちの父アダムの時代から最後の預言者ムハンマドに至るまで、使者と啓示が私たちに送られてきました、彼に平安と祝福がありますように。 彼は最後の啓示を携えてやって来た。 「رب العالمين」という言葉は「世界の主」を意味します。 「天にあるものと地にあるものはすべてアッラーを讃えます。 「そして彼は力ある者、知恵者である」 59:1<br><br>

    たとえ人々がアッラーを信じず、他の誰かを崇拝したとしても、それは彼らが神の創造物であり、彼らを正しい道（イスラム教）に導いたり、アッラーを信じないように非難したりできるのはアッラーであるという事実に変わりはありません。 これが真実であることを示した後の啓示。 これはイスラム教の信念です。<br><br>



    <h3>シャリーア (法律)</h3>
    イスラム教徒は、イスラム諸国では「良性の」シャリーア法を使用しません。 むしろ、シャリーア法を使用してください。 シャリーアとは、祈り、断食、慈善活動、マナー、ヒジャブの着用、一緒に住んでいる人々、隣人、高齢者との良好な関係の構築など、アッラーが私たちに従うよう命じた天の法律の定義です。 シャリーア。 シャリーアは、統治、政治、司法制度、法執行、その他生活の多くの側面もカバーしています。 イスラム教は生き方であり、私たちがアッラーを満足させて生き、自分自身を律するために必要な人生のすべての事項を網羅しています。<br><br>

    イスラム教では、禁じられたことやタブーなことをしてはいけないというように、アッラーの規則によって自分の人生をコントロールすることになります。そして、それは自由ではないと考えると、たとえば、息子が市場に行って、市場にあるチョコレートをすべて食べたいと思った場合、あなたは自分の人生をアッラーの規則に支配されます。 彼を止めるだろう？ では、あなたは彼に自由がないことを望みますか、それとも彼がそうすれば自分自身を傷つけることを知っていますか？<br><br>

    アッラーは宇宙を創造され、どのようなことが私たちを傷つけるかをご存知です。そしてアッラーは世界を報酬の場所ではなく、苦しみと疲労の場所として創造されました。<br><br>

    <h3>祈る</h3>
    祈りは季節の変化によって国ごとに異なりますが、中東、北アフリカ、東アフリカなどの地域に住んでいる場合、毎日の祈りは特定の時間に設定されており、変わることはありません。 それはむしろ時間の問題です。 例: 日の出前、夜明け頃のファジルの祈り。 日が昇ってすぐに祈ることは許されていません。その後、正午、午後、日没後、そして夕方になります。 日の出と日の入りの時間が変われば、祈りの時間も変わります。<br><br>

    <h3>コーラン</h3>
    イスラム教の聖典にはアッラーの言葉であるコーランがあります。コーランはアラブ人が最も雄弁だった時代にアラブの国でアラビア語で啓示され、その雄弁さと美しい言葉ですべてのアラブ人に挑戦しました。そして今のところこれに匹敵するものはありません。 コーランは雄弁に書かれており、スーラはコーランの一部です。<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=TGuZMLhyRXg">詳細 (誰かがスーラをコーランのように作った?!) [英語ビデオ]</a><br><br>

    コーランは誤って伝えられておらず、最も古いコーランについて検索することでそれを確認できます。それは最新のコーランと何の違いもありません（フォントを除く）。そして、より確実性を高めるのは、コーランがオーディオブックであることです。 書かれた本であり、コーランを読む許可というものがあり、それはコーランを読むことに熟達した人から預言者ムハンマド（彼の上に平安あれ）まで続く連続的なものです。<br><br>

    クルアーンは、人々が読んだ内容を理解できるように、世界中のあらゆる言語に翻訳したり翻訳したりすることができますが、アッラーはアラビア語で啓示を下されたため、アラビア語のみが「啓示」と見なすことができます。 その他はコーランの単なる翻訳です。 イスラム教徒の 80% は非アラブ人ですが、コーランを暗誦して理解することができ、毎日の祈りでコーランを暗唱します。 ただし、イスラム教の情報源のほとんどはアラビア語で書かれているため、完全に体験したい場合はアラビア語を学ぶ必要があります。<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=mJyNYxPEiMw">アラビア語とコーランを学ぶ (ロードマップ英語ビデオ)</a><br>
    <a target="_blank" href="https://arabic101.org/wp-content/uploads/woocommerce_uploads/2023/03/quran-quest_2.pdf">アラビア語とコーランを学ぶ (ロードマップ PDF)</a><br>

    <h3>ザカート</h3>
    イスラム教では政府が課す税金は一切ありません。 非イスラム的な概念なので税金はあってはならない。 非イスラム教徒がイスラム政府のもとでの生活を希望する場合、ジズヤを支払うことになります。ジズヤは、非イスラム教徒に安全と安心を与えるだけでなく、イスラム教徒と同じサービスや特権へのアクセスを与えるための税金です。 イスラム教徒に関して言えば、彼はザカートと呼ばれるイスラム教で義務付けられている何かを行います。 イスラム教徒は毎年富の2.5％を貧しい人々に支払う義務があるが、ジズヤはザカートよりはるかに少ない。 これにより、社会がより良くなり、貧しい人々と裕福な人々の間の資源や特権の不足を補いながら、お互いを高め合うことができます。 ムスリムが必要な場合を除き、他のムスリムからザカートを奪うことは許されません。 したがって、歴史上、イスラムの支配者に食べさせる貧しい人々がいなかったため、誰が施しをしているかについて国民が不満を抱いた時代があった。<br>
</div>

<div class="part">
    Coming Soon...
</div>
`,


// Italy
`
<h1 class="title">La verità</h1>

<div class="part">
    Ciao a tutti, spero che leggerete questo articolo fino alla fine perché è molto importante. Saltiamo su di esso.

    <br><br>
    <h1>Parte 1: Ci deve essere un Dio</h1>
    Ammettiamo che tutto ciò che accade ha una causa. Ad esempio, se qualcuno ti colpisce, sentirai dolore. Sulla base di ciò, concludiamo che ogni cosa creata ha un Creatore, ogni macchina ha un creatore, ogni casa è stata costruita da un creatore e l’universo ha Dio. Questo perché tutto ciò che accade ha una causa.<br><br>

    <img src="./universe.png">

    Se pensi che l’universo sia stato creato dal big bang ti sbagli. Quando dici che l'inizio dell'universo è una cosa molto piccola, allora non hai risposto alla domanda "Chi ha creato questa piccola cosa?" E la risposta è assolutamente Dio. Dio deve essere perfetto solo per creare l'universo, e non c'è somiglianza con Lui, e nessuno è simile a Lui perché Dio ha creato noi e tutta la creatività nell'universo. Devi adorare Lui solo perché è Lui che ti ha creato. Se credi che siamo creati per caso dall'evoluzione, ti sbagli perché...
</div>

<div class="part">
    <h1>Parte 2: Evoluzione</h1>
    Innanzitutto, voglio che tu sappia che l'universo è finemente sintonizzato e il caso non può creare questo universo sintonizzato. In secondo luogo, conosciamo i quattro pilastri della teoria dell'evoluzione.<br><br>

    <h3>Pilastri teorici</h3>
    1. Gli organismi viventi sono nati in qualche modo da oggetti inanimati.<br>
    2. La natura dota gli organismi di nuove caratteristiche che possono trasformarli da una specie all'altra.<br>
    3. I tratti acquisiti vengono ereditati e la natura seleziona cumulativamente fino agli esseri superiori.<br>
    4. La natura installa sistemi vitali complessi di semplici cambiamenti successivi.<br><br>

    La conclusione è che gli esseri viventi si "evolvono" senza l'intento o la volontà di un creatore scelto o consenziente che sa cosa sta facendo.<br><br>

    Assicuriamoci di questi pilastri.<br><br>

    <h3>Assicurati</h3>
    1. Gli organismi viventi sono nati in qualche modo da oggetti inanimati.<br>
    Questo è un mito caduto grazie agli esperimenti, il più famoso dei quali fu quello di Francesco Redi, due secoli prima di Darwin. Ha dimostrato che gli organismi che si credeva fossero stati autogenerati da oggetti inanimati come gli avanzi provenivano dall'esterno del materiale, cibo con aria inquinata.<br><br>

    La verità è che l’autogenerazione è originariamente illogica. È impossibile immaginare un essere vivente che nasca automaticamente da oggetti inanimati. Ma hanno insistito per provarci! Ci hanno provato e la superstizione è stata distrutta dalla scienza empirica e dalla mente.<br><br>


    2. La natura dota l'organismo di nuove caratteristiche:<br>
    Anche questo è un mito caduto con le scoperte di Gregor Mendel, il quale dimostrò – anni dopo Darwin – che le caratteristiche ereditarie dei bambini non si discostano da quelle originariamente presenti nei genitori. È caduta anche con le scoperte dell’epigenetica, che hanno dimostrato che fattori esterni e ambientali possono cambiare il modo in cui il materiale genetico viene letto in un organismo per attivare un tratto o estinguere un tratto che era attivato, ma non aggiungono materiale genetico che non era originariamente presente.<br><br>


    3. I tratti acquisiti vengono ereditati e la natura seleziona cumulativamente fino agli esseri superiori:<br>
    Come puoi immaginare, anche questo è un mito caduto. I muscoli del fabbro e del falegname, ad esempio, non vengono ereditati dai figli. Tuttavia, i seguaci di Darwin insistettero nel provarci. Weismann continuò a tagliare la coda a 19 generazioni di ratti, solo per essere sorpreso, dopo una lunga fatica, dalla nascita di una prole di nuovo con la coda. Ciò significa che la caratteristica acquisita, ovvero la coda mozzata, non è stata trasmessa ai bambini.<br><br>

    Cosa resta allora della teoria di Darwin?<br><br>

    4. La natura installa sistemi vitali complessi di successivi semplici cambiamenti.<br>
    Finché non capirai cosa significa la selezione naturale di Darwin? La vasta immaginazione di Darwin gli ha portato l'idea che natura, uso e abbandono; Gli organismi antichi producevano strutture corporee semplici che avrebbero potuto servire all'organismo in qualcosa, quindi la selezione naturale le ha preservate. Chi non sapeva che l'accumulo di queste strutture avrebbe prodotto un organo completo e integrato come un'ala per un uccello o un occhio per un animale?<br><br>

    <h2>Storia</h2>

    Per comprendere la logica di Darwin, immagina una terra piena di spazzatura. Vi passano tanti ciechi e ognuno di loro raccoglie a caso un rottame. Quindi entrano in un grande edificio la cui porta viene chiusa dopo ogni ingresso.<br><br>

    <img src="./junk.png">

    Passarono milioni di anni e i ciechi raccolsero i rottami, morirono e furono sepolti sotto il terreno dell'edificio.<br>
    Un giorno, hai aperto il cancello dell'edificio e un gigantesco aereo Boeing, guidato da un cieco, si è precipitato fuori dal cancello ed è volato in cielo!<br>

    <img src="./air plane.png">

    Vi siete chiesti: come ha fatto il cieco a costruire l'aereo?! Ti è stato detto: Non aveva intenzione di farcela! Ma quello che è successo al cieco davanti a lui è che chiunque gli prende un pezzo di ferraglia utile; rimase fermo e lo lasciò in eredità al suo successore! Alcuni di loro presero un telo per proteggersi dal freddo; un altro prese un ferro da stiro per ripararsi dal sole, e un terzo prese il volante di un aereo con cui mescolavano il cibo mentre cucinavano, e un quarto prese una bottiglia che usarono come scudo nella loro guerra contro i loro nemici ciechi! <br><br>

    Ciò continuò in tempi successivi e lasciarono in eredità i loro pezzi a coloro che li succedettero, e i pezzi furono installati involontariamente, né mediante un'azione attiva finché da esso non si formò questo grande piano che vidi!<br><br>

    Quindi, fai attenzione all'illusione che qualcuno volesse che un aereo si formasse o volasse!<br><br>
    Con lo stesso ragionamento, Darwin riteneva che la selezione naturale avesse ricucito ciecamente le strutture degli organismi. Ad esempio, le ali degli uccelli per aiutarli a volare sono uno "pseudoscopo". Significa un obiettivo immaginario, non reale! E l'occhio è un bersaglio immaginario perché non esiste un agente scelto con volontà che abbia voluto che l'occhio vedesse o che le ali battessero. Piuttosto, tutto questo è avvenuto con un accumulo di cieche coincidenze!<br>

    Questo è lo scherzo della selezione naturale cieca inventato da Darwin, ed è - oltre alla sua assurdità per ogni mente sana - che le scoperte scientifiche hanno dimostrato la loro impossibilità con l'esistenza di una complessità irriducibile in tutti i dettagli degli organismi e nelle loro relazioni . Cioè, le strutture e i membri degli organismi viventi sono estremamente complessi e integrati in modo che possano esistere solo con la disponibilità delle loro parti in un dato momento. Altrimenti non svolgeranno la loro funzione. Pertanto non si prestano affatto all'idea di una formazione graduale, nemmeno a livello della più piccola unità vivente.<br><br>

    Ai suoi tempi Darwin non vedeva la cellula al microscopio se non come un semplice striscio!<br><br>

    Anche la selezione naturale rappresentata da Darwin è un mito.<br><br>

    Basandosi su queste superstizioni infondate della ragione, dei sensi e dell’esperienza, Darwin costruì l’idea più assurda e stupida della storia. Tutto ciò che vediamo di giudizio e maestria in questa creazione è arrivato per caso senza intenzione e non necessita di conoscenza o saggezza!<br><br>

    Dopo aver constatato l'invalidità di questa teoria, devi credere che l'universo non può essere creato per caso e anche credere che "deve esserci un Dio".<br><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=x0jw56ylJOE&list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc&index=24">Scopri di più (evoluzione) [Video - Sottotitoli in Italiano].</a><br>
    <a target="_blank" href="https://www.youtube.com/playlist?list=PL56IcDjrf3YJr__TEOJ2UOv3jCzht1_yc">Ulteriori informazioni [Playlist - Sottotitoli in inglese] (Inizia dal primo video o dal video numero 24 nella playlist fino alla fine).</a>
</div>

<div class="part">
    <h1>Parte 3: Trovare la giusta religione</h1>
    Siamo d'accordo sul fatto che qualsiasi religione creata dagli esseri umani è sbagliata perché la religione deve provenire da Dio e la religione giusta non deve essere stata travisata. Ora abbiamo tre religioni monoteistiche: ebraismo, cristianesimo e islam.<br><br>

    🔷 Il primo è l'ebraismo:<br>
    Per essere ebreo, devi appartenere alla loro famiglia. Assolutamente, questa religione è nulla perché non è giusto se vuoi adorare Dio che ti ha creato e non puoi farlo perché non sei della loro famiglia.<br><br>

    🔷 Il secondo è il cristianesimo:<br>
    <ul>
        <li>Nel cristianesimo, devi credere che Dio è composto da tre Dei: Padre, Figlio e Spirito Santo. Questa idea su Dio è stata fatta da alcuni sacerdoti, ma come esistono tre Dei? Se Padre, Figlio e Spirito Santo sono Dei, allora possono controllare l'universo. Ma il Figlio è umano e gli esseri umani non possono controllare l'universo.</li><br>
        <li>Il libro sacro del cristianesimo è la Bibbia, e la Bibbia è stata travisata dagli esseri umani. Spero che tu legga delle "copie" della Bibbia e delle sue contraddizioni e che ci siano molte traduzioni della Bibbia, sebbene il testo ebraico sia lo stesso. Ad esempio, quando era l'età di Davide quando regnava? Era 1, 30 o 40?</li><br>
        <li>Se il Padre vuole che qualcuno muoia alle 4, e il Figlio vuole che quella persona muoia alle 5, allora cosa succede? Quella persona morirà a 4 o 5 anni? Se la risposta è 4, allora il Figlio non è Dio. Se la risposta è 5, allora il Padre non è Dio perché Dio deve essere in grado di controllare l'universo.</li><br>
        <li>Nel cristianesimo esiste una deroga a Dio. C'è una storia che racconta che Giacobbe combatté Dio e lo avrebbe ucciso. Ma eravamo d'accordo sul fatto che Dio deve essere perfetto solo per Lui, e Dio il più forte nell'intero universo perché Dio ha creato l'universo.</li><br><br>
    
        <li>Il quinto motivo è:</li><br>
    
        <ul>
            <li>Nel cristianesimo, Dio mandò Gesù sulla Terra affinché fosse crocifisso per espiare il peccato di Adamo. Ma chi ha commesso il peccato? Adamo o Gesù? Qual è il peccato di Gesù di essere crocifisso, e chi ha commesso il peccato, Adamo?</li><br>
            <li>Nel cristianesimo, Gesù fu crocifisso per espiare il peccato per conto di Adamo. E chi venne dopo Gesù ma morì prima della morte di Gesù morì nel peccato! Qual è il peccato di coloro che vennero prima di Gesù per morire nel peccato, e perché Gesù non scese prima per espiare i peccati di più persone?</li><br>
            <li>Dove Gesù disse: "Io sono Dio"? Dove ha cercato il culto per se stesso? Dove ha detto: "Io sono Dio che appare nella carne"? Dove ha parlato del peccato originale? Dove ha detto: "Io sono Dio il Figlio"? Dove ha detto: "Io sono Dio, la Parola"? E dove ha detto: "Io sono Dio, la seconda persona"?</li>
        </ul>
    </ul>
    
    <br>

    <a target="_blank" href="https://www.youtube.com/watch?v=M71t_GmkJ1g">Scopri di più (cristianesimo) [Video - Sottotitoli in italiano].</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=7iFCMs8jE8k">Scopri di più (trinità) [Video - Sottotitoli in italiano].</a><br>
    
    <br><br>

    Ora abbiamo l’ultima religione, che è l’Islam. Ma prima di continuare a leggere o ad ascoltare, non fidatevi dei media e dei film perché non riveleranno l'intera verità dell'Islam. Distorcono solo l’immagine dell’Islam nel tuo cervello. Non fidarti di loro. Cerca tu stesso la verità e tuffiamoci dentro.
</div>

<div class="part">
    <h1>Parte 4: Conosci davvero l'Islam?</h1>
    L'Islam è una religione che ti comanda di adorare Allah, l'unico Dio, senza partner e di obbedire al suo profeta Maometto - La pace sia su di lui -.<br>
    Per essere musulmano, dici le due testimonianze:<br>
    أشهد أن لا إله إلا الله وأشهد أن محمدا عبده ورسوله ('ashhad 'an la'iilah 'iilaa allah wa'ashhad 'ana muhamadan eabduh warasuluhu).<br>
    che significa: "Attesto che non c'è altro dio all'infuori di Allah, e attesto che Maometto è il Suo Profeta e Messaggero."<br><br>

    <a target="_blank" href="https://www.islam-guide.com/ch3-8.htm">Scopri di più sul profeta Maometto - la pace sia con lui - [Articolo in italiano]</a><br>
    <a target="_blank" href="https://www.youtube.com/watch?v=_JbKdKS9Yyg">Scopri di più sul profeta Maometto - la pace sia con lui - [Video - Sottotitoli in italiano]</a><br><br>

    L’Islam è la religione che è d’accordo con la natura umana. È la religione che richiede l'adorazione dell'unico Dio che è Allah.<br><br>

    Allah è il Dio di tutto l'universo. Allah è perfetto solo per Lui, non esiste alcuna somiglianza con Lui e nessuno è simile a Lui. Devi adorare Lui solo.<br><br>

    Ora facci conoscere i pilastri dell'Islam che ti rendono musulmano:<br>
    1. Due testimonianze<br>
    2. Le cinque preghiere<br>
    3. Pagamento della Zakat<br>
    4. Digiuno durante il Ramadan<br>
    5. Hajj<br><br>

    Il quarto è il digiuno durante il Ramadan. Il Ramadan è un mese Hijri in cui devi smettere di mangiare e bere da Fajr al Maghreb e dove c'è una notte chiamata Notte di Al-Qadr. Chi vince è meglio per lui che mille mesi.<br>

    <h3>Aqida (credo musulmano)</h3>
    Il musulmano crede in Allah, il Signore dei cieli e della terra. Padrone di tutto ciò che esiste. Il Signore di Ibrahim. Messaggeri e rivelazioni ci sono stati inviati dai tempi di nostro padre Adamo fino all'ultimo dei profeti, Muhammad, pace e benedizioni su di lui. Arrivò con la rivelazione finale. La parola “رب العالمين” significa Signore dei Mondi. “Tutto ciò che è nei cieli e tutto ciò che è sulla terra glorifica Allah. “Ed egli è il Potente, il Saggio” 59:1<br><br>

    Anche se le persone non credono in Allah e adorano qualcun altro, ciò non cambia il fatto che sono Sua creazione e che Egli è colui che può guidarli sulla retta via (Islam) o condannarli a non credere in Lui. Rivelazione dopo aver mostrato loro che questa è la verità. Questa è la credenza musulmana.<br><br>

    
    
    <h3>Sharia (leggi)</h3>
    Un musulmano non usa la legge “benigna” della Sharia nei paesi islamici. Piuttosto, ma usa la legge della Sharia. La Sharia è la definizione delle leggi celesti che Allah ci ha comandato di seguire, come la preghiera, il digiuno, la carità, le buone maniere, indossare l'hijab e costruire buoni rapporti con le persone con cui vivi, vicini e anziani, fanno tutti parte di Sharia. La Sharia copre anche la governance, la politica, il sistema giudiziario, le forze dell’ordine e molti altri aspetti della vita. L'Islam è lo stile di vita e copre tutte le questioni necessarie della vita in modo che possiamo vivere e governarci in modo soddisfacente per Allah.<br><br>

    nell'Islam fai in modo che le regole di Allah ti controllino nella tua vita poiché non devi fare nulla di proibito o tabù, e se pensi che non sia libertà, quindi per esempio se tuo figlio è andato al mercato e vuole mangiare tutti i cioccolatini al mercato tu lo fermerà, vero? allora lo vuoi senza libertà, o sai che se lo fa si farà del male?<br><br>

    Allah ha creato l'universo e sa quali cose ci feriscono, e Allah ha creato il mondo come un luogo di afflizione e fatica, non un luogo di ricompensa.<br><br>

    <h3>Prega</h3>
    Le preghiere cambiano in ogni paese a causa dei cambiamenti stagionali, ma se vivi in una regione come il Medio Oriente, il Nord Africa e l'Africa orientale, le preghiere quotidiane vengono fissate in orari specifici e non cambiano mai. E' più una questione di ora del giorno. Ad esempio: la preghiera Fajr prima dell'alba, intorno all'ora dell'alba. Non è consentito pregarlo non appena sorge il sole, poi c'è mezzogiorno, pomeriggio, dopo il tramonto, poi sera. Se cambia l'ora dell'alba e del tramonto, cambia l'ora della preghiera.<br><br>

    <h3>Corano</h3>
    Nell'Islam il libro sacro è il Corano che sono le parole di Allah, Il Corano è stato rivelato in lingua araba in un paese arabo quando gli arabi erano più eloquenti, sfidando tutti gli arabi con la sua eloquenza e le sue belle parole, E finora, niente di simile Il Corano è stato scritto nella sua eloquenza e la Sura è una parte del Corano.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=TGuZMLhyRXg">Ulteriori informazioni (qualcuno ha creato la Sura come il Corano?!)</a><br><br>

    Il Corano non è travisato e puoi esserne sicuro effettuando una ricerca sul Corano più antico, non c'è differenza tra esso e il Corano più recente (tranne il carattere), e ciò che aumenta la tua certezza è... Il Corano è un audiolibro prima di essere un libro scritto ed esiste il permesso di leggere il Sacro Corano che è una catena continua dalla persona abile nella lettura del Corano al profeta Maometto - La pace sia su di lui -<br><br>

    Il Corano può essere tradotto e tradotto in qualsiasi altra lingua del mondo affinché le persone comprendano ciò che leggono, ma Allah ha inviato la rivelazione in lingua araba, quindi l'unica lingua araba può essere considerata la “rivelazione”. Altri saranno semplicemente una traduzione del Corano. L’80% dei musulmani non sono arabi, ma sono ancora in grado di recitare e comprendere il Corano e di recitarlo quotidianamente in preghiera. Tuttavia, se vuoi vivere un'esperienza completa, devi imparare l'arabo perché la maggior parte delle fonti islamiche sono in arabo.<br><br>

    <a target="_blank" href="https://www.youtube.com/watch?v=mJyNYxPEiMw">Impara l'arabo e il Corano (video in inglese sulla roadmap)</a><br>
    <a target="_blank" href="https://arabic101.org/wp-content/uploads/woocommerce_uploads/2023/03/quran-quest_2.pdf">Impara l'arabo e il Corano (roadmap Pdf)</a><br>

    <h3>Zakat</h3>
    Nell’Islam non vi è alcuna tassa imposta dal governo. Non dovrebbero esserci tasse perché è un concetto non islamico. Se un non musulmano desidera vivere sotto un governo islamico, paga la jizya, che è una tassa per i non musulmani per garantire loro sicurezza e protezione, nonché l’accesso agli stessi servizi e privilegi dei musulmani. Per quanto riguarda il musulmano, fa qualcosa di obbligatorio nell'Islam chiamato zakat. I musulmani sono tenuti a versare annualmente ai poveri il 2,5% della nostra ricchezza, mentre la jizya è molto inferiore alla zakat. Ciò rende la società migliore e compensa la mancanza di risorse e di privilegi tra i poveri e i ricchi, rafforzandosi a vicenda. Non è consentito a un musulmano prendere la zakat da altri musulmani a meno che non ne abbia bisogno. Pertanto, ci sono momenti nella storia in cui i governanti islamici non avevano poveri da sfamare e la popolazione si lamentava di chi faceva l'elemosina.<br>
</div>

<div class="part">
    Coming Soon...
</div>
`,

];


langs.onclick = (eo) => {
    if(eo.target.classList[0] == "lang") {
        if(inArr(langsText, eo.target.innerText.toUpperCase())) {
            partsCont.innerHTML = langsContent[allIndexInArr(langsText, eo.target.innerText.toUpperCase())];
        }
    }
}