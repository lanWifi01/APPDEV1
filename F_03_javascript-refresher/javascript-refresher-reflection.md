### 00_script_in_html.html
* Natutunan ko na para ma import mo ang isang javascript file sa html ay kailangan mo ang `<script>` tag. Natutunan ko rin ang pagkakaiba ng classic script at ng isang module script. Ang module script ay gumagamit ng import at export para makuha ang ibang js file. Isa pa, ang module script ay ina-isolate ang isang script upang hindi ito malagyan o mabawasan ng contents na galing sa ibang script.

### 01_base_syntax.js
* Natutunan ko rito na ang console.log() ay ip-print sa terminal ang value na nasa loob nito. Natutunan ko rin ang mga rules nararapat na sa variable name such as, *must not start with digit*, *hyphens are not allowed*, and *must not use a reserved word as a variable name*.

### 02_variables.js
* Natutunan ko ang iba ibang types ng variable sa javascript *string, number, at boolean* at para malaman kung anong type ng variable ang isang variable, natutunan ko na gagamit tayo ng *typeof*. Isa pa sa natutunan ko sa parteng ito ay ang pag gamit ng arithmetic ay gumagana kung meron kang mga numbers. Natutunan ko rin ang dalawang type ng pagkukumpara -- ang *==* at *===*. Mas strikto ang *===* kumpara sa *==*.

### 03_functions.js 
* Natutunan ko sa part na ito ang ginagawa ng functions. May dalawang uri ng function declaration, ang normal at ang arrow function. Ipinapakita rito na ang function y kaya lamang mag return ng isang bagay ngunit pwede ka magpasa ng object o kaya array na nagh-hold ng mga maraming bagay. Natutunan ko rin na ang pag pangalan sa function ay kaparehas sa pag pangalan sa variable (same sets of rules lang), ngunit di gaya sa variable, ang function ay kailangan na pangalanan bilang isang verb at hindi lamang noun, dahil ang function ay may ginagawa. 

### 04_objects.js
* Natutunan ko sa part na ito ang ginagawa ng isang object. Ang object ay may kayang i group ang mga related data. Natutunan ko rin ang method na siya palang nakapaloob sa isang object at ang *this* na nasa loob nito ay nangangahulugan na tumatawag ito sa loob ng object na kinapapalooban nito. Isa pa sa natutunan ko ay pwede ka rin magdagdag ng properties sa loob ng isang object kahit na na declare mo na ito. Isa itong paraan upang kahit na mahaba at marami ang mga values na magkakakonekta ay kaya mo itong i group. Helpful din ito pag dating sa pag return ng maraming values sa isang function.

### 05_arrays.js 
* Natutunan ko sa part na ito ng activity ang ginagawa ng array at ang iba't ibang part na konektado sa array. Natutunan ko na ang array ay nagiimbak ng ordered list ng mga values. Natutunan ko ang ilan sa mga function na konektado sa array, ang *push()* at *shift()*. Ang *push()* ay parang *append()* sa python. Nag a-add ito ng panibagong value sa hulihan ng array while ang *shift()* naman ay nag aalis ng value sa unahan ng array. Natutunan ko rin ang *for...of* kung saan pinapasadahan nito ang bawat value sa loob ng array in order. Natutunan ko rin ang *map()* na gumagawa ng bagong array habang ginagawang bago o dinadagdagan ang bawat value sa unang array na pinagkuhanan ng hindi binabago ang laman ng pinagkuhanan na array.

### 06_control_structures.js
* Sa parteng ito, natutunan ko ang iba't ibang uri ng control structures. Tulad ng *if...else if...else*, ang ginagawa nito ay gumagawa ng conditions at chinecheck ang mga conditions mula taas hanggang baba, kung alin ang unang condition na tumugma, ito ang mag r-run. Natutunan ko rin ang for at while loops na parehas na umuulit ng code. Ang for ay kung alam mo na ang bilang una pa lang at ang while naman ay kung gusto mo tignan ang kahahantungan ng code.

### 07_dom.html
* Natutunan ko sa parteng ito kung ano ang ginagawa ng DOM. Ito ang nagrerepresenta sa iyong page. Hinahanap ng JS ang element at ina-update ito agad. Natutunan ko rin ang ginagawa ng function na *prompt()* na humihingi sa user ng input at ang *setTimeout()* ay magr-run ng code after ng delay. Na realize ko rin na isa ito sa mga pinakamahalagang bahagi ng web development dahil ito mismo ang kumokonekta html at sa html na siyang nag bibigay ng interactivity ng isang website para sa mga users.

### 08_essential_features.js 
* Natutunan ko sa parteng ito ang mga essential na dapat tandaan sa JS. Ang *map()* na siyang nagt-transform ng arrays, ang *destructuring* na siyang kumukuha ng value sa isang array o object, at ang *spread opreator* na siyang kumokopya sa isang array na pwede rin dagdagan ito. na realize ko na mahalaga ang mga ito dahil ang mga ito ay ang madalas na gamitin sa mga JS projects gayon din sa pinagaaralan namin ngayon na React. Nakakatulong din ito upang mas mapadali ang pagc-code ng isang programmer, tulad na lamang ng destructuring na imbes na gumawa ng gumawa ng maraming variable sa maraming line ay isang line na lamang.

### 09_tricky_parts.js
* Sa parteng ito, natutunan ko na sa JS, may mga bagay na hindi basta basta madaling maintindihan. Tulad ng *==* at *===*, mas strikto sa pag compare ang *===* kaysa sa *==*. Gayon din ang pagkakaiba ng *null* at *undefined* na akala ko nung una ay halos magkaparehas lang. Ang *null* pala ay intentional na hindi nilagyan ng value at ang *undefined* naman ay variable na na declare lamang ngunit hindi nalagyan ng value. Natutunan ko rin na hindi pala gumagana ang *this.* sa loob ng arrow method sa object hindi tulad ng natural na method. Isa pa sa natutunan ko ay ang gamit ng *spread* copy. Kung hindi mo gagamitan ng *spread* at basta basta lamang ni reference ang isang array, kung babaguhin mo ang akala mong bagong copy na array ay madadamay ang naunang pinagkopyahan mong array, pero kung gagamitan mo ito ng *spread*, makakagawa ka talaga ng copy ng unang array na hindi konektado sa unang array. Mahalagang maintindihan ang mga ito dahil madalas, kung hindi natin maiintindihan ang mga tricky parts na ito ng JS ay maaaring magkaron ng problema o di kaya ay bug sa code na mahihirapan kang ayusin. Isa pa, in the long run, maraming mga bagay ang pag-gagamitan ng mga tricky parts na ito at mahalagang malaman natin kung ano ang mga gamit at kung ano ang nakakapagpalito sa mga bagay na ito.

### 10_let_const.js
* Dito sa parteng ito ng activity, natutunan ko ang pagkakaiba ng *const*, *let*, at *var*. Ang *const* ay ginagamit kung kailangan mo ng variable na constant o hindi nagbabago sa buong code, halimbawa ay pi o kaya naman ay gravity. Ang *let* naman ay ginagamit kung kailangan natin ng variable na kailangan baguhin sa code o i-reassign. Ang *var* ay ang old school way ng pag declare ng variable. Gumagana ito ngunit kailangan na i-avoid dahil ini-ignore nito ang block scope na maaaring magresulta sa error na siyang sinosolve ng *let* at *const*. Mahalaga itong maintindihan dahil ang mga ito ay hindi nawawala sa code ng JS maliban na lang sa *var* na hindi na ginagamit sa modern practices. 

### 11_arrow_functions.js 
* Natutunan ko rito ng mas maayos ang ginagawa ng arrow function, isa itong modern way ng pag gawa ng function, hindi tulad sa typical function, gumagamit ito ng arrow at parang variable ang style ng pag declare ng function. Natutunan ko rin ang paggamit ng implicit return sa arrow function, at nalaman ko na mahalaga ito dahil imbes na pahabain ang code, mas pinaiikli nito ang code na maaaring makatulong sa mas mabilis na runtime ng system na makakatulong sa mas malalaking projects. 

### 12_destructuring.js
* Natutunan ko rito ang pag destructure ng array at object. Ito ay ang paraan ng paghati ng values ng isang array or object at i-distribute sa ibang variable gamit lamang ang isang linya. Natutunan ko na magkaiba ang pag destructure ng array sa pag object. Ang array kasi ay pwede mong ma rename ang isang value, ngunit sa pag destructure ng object ay kailangan mong gamitin mismo ang pangalan ng variable na nasa loob ng object, at para ma rename mo ang variable, kailangan may gawin ka pang ibang bagay. Magandang bagay itong matutunan dahil isa ito sa mga paraan para mas mapadali ang pag c-code mo at maging mas malinis ang code.

### 13_spread_rest.js 
* Natutunan ko sa parteng ito ang spread operator. Isa itong paraan para i-copy ang ang isang array o ang isang object. Natutunan ko rin ang *.reduce()* function. Tumatanggap ito ng dalawang pangunahing values, ang *accumulator* at *currentValue*. Isa itong mahalagang parte ng JS dahil cinocopy ng spread ang array o kaya ang object ng hindi naaapektuhan ang original na array o object.

### 14_classes_inheritance.js
* Natutunan ko sa parteng ito ang class at inheritance na nasa JS. Tulad ng ibang progrmming language, meron din nito si JS. Pinapadali nito ang pag gawa ng objects dahil ito ang blueprint ng object. Ang class din ay di tulad ng functions na camelCase kundi PascalCase. 

### 15_modules_export.js
* Natutunan ko sa parteng ito ang pag export. Isa itong paraan ng pag share ng code from one to another. May dalawang paraan ng pag export, ang default at ang named export. Isa lamang default export ang pwede samantalang maraming named export ang pwede. Mahalaga itong matutunan dahil talamak ang gamit ng export sa anumang klase ng JS projects. 

### 16_modules_import.js 
* Kung sa part 15, natutunan ko ang export, dito naman sa part na ito, natutunan ko kung paano mag import. Ang import ay isang paraan para magamit mo ang na-export mo galing sa ibang file. Parehas lang din ito sa export na mayroong default at named import. Ang default ay walang curly braces at ang names ay meron gaya sa export. 

### 17_logical_operators.js
* Natutunan ko sa parteng ito ang logical operators. Natutunan ko ang mga values ng isang variable na truthy at ang mga values na falsy tulad ng 0, "" *empty string*, null, at undefined. Natutunan ko rin ang tungkol sa *NOT (!)*. Piniflip nito ang value ng isang boolean. Natutunan ko rin ang kaibahan ng *&& (AND)* at *|| (OR)*. Sa una ay mahirap ito, ngunit mas naintindihan ko na ang mga ito ng mas sinuri ko pa. Basically pala, sa *|| (OR)*, ine-execute nito ang pinakaunang makita niyang value na truthy at kung lahat naman falsy, pupunta ito sa pinakahuli at iyon ang ie-execute. Sa *&& (AND)* naman, ang tinatandaanan ko na lang ay kung parehas na false o kaya may isang falsy, ie-execute nito ang una, pagka parehas naman na truthy, ie-execute nito ang huli.

### 18_ternary_nullish.js
* Natutunan ko sa part na ito na marami ang uses ng *?*. Tinatawag itong ternary operator, *nullish coalescing* operator, at optional chaining. Pwede mo siyang magamit bilang kahalili ng if-else. Ang if-else, gaya ng nasabi sa dating discussion ay hindi pwedeng magamit sa loob ng JSX element dahil ito ay isang statement kaya ginagamit ang ternary operator dahil isa itong expression. Isa pa sa natutunan ko na nagpadali sa aking pagkaintindi ay ang *nullish coalescing* pala ay halos gaya lang ng *OR* ngunitang tinatarget lamang ay ang null or undefined. Ang tinandaanan ko lamang ay pag null or undefied ang unahan, kukunin niya ang pangalawa, kung hindi naman null or undefined, kahit falsy pa ang value, kukunin niya pa rin ang una. 

### 19_strings_numbers.js 
* Natutunan ko sa parteng ito ng mas maayos ang mga numbers at strings. May mga function palang ginawa para lamang sa strings at numbers. Isa sa tumatak sakin ay ang *.trim()*, minsan kasi ay nagagamit ko ito sa python dahil parehas lang ang function nito sa *strip()*. Isa pa sa tumatak sakin ay ang *.slice()* kahit wala ito sa instructions, parehas din kasi ito sa pag gamit ng *[:]* sa python. Ang *print("Dylan"[1:2])* sa python ay parehas ng *console.log("Dylan".slice(1, 2))* sa JS. 

### 20_array_methods.js
* Natutunan ko sa parteng ito ang iba pang functions na tulad ng *map()*. Tulad ng *filter()*, *find()*, *every()*, *some()*, at *sort()*. Maganda na mayroon akong kaalaman sa mga functions na ito dahil nakakapagpadali ito ng buhay ng isang dev. Imbes na gumawa pa from scratch ng mga functions, tatawagin ko na lang ang mga built-in functions ni JS.

### 21_errors_json.js
* Dito sa parteng ito, naintindihan ko ang comparison ng if-else sa try-catch block. Imbes kasi na mag if-else lang, pwede palang mas i-specidy mo ang error gamit ang catch. Nalaman ko rin na helpful ito pag dating sa codes na hindi ka sure kung magr-run, kung ayaw mo na mag crash ang system or code, lalagyan mo lang ito ng catch. Natutunan ko rin sa parteng ito ang madalas ginagamit sa API calling, ang *JSON.stringify()* at ang *JSON.parse()*. Magandang bagay rin na malaman ito dahil napaka importante nito sa JS.

### 22_async_javascript.js 
* Natutunan ko sa parteng ito ang palaging ginagamit sa mga pag tawag ng api, ang *async await*. Isa itong mahalagang parte ng JS dahil mas pinalinaw nito ang takbo ng pag tawag sa mga asynchronous code para mas malinaw at mas magmukhang sunod sunod ang code. Gaya ng sinabi sa lesson, pine-prevent ng *async await* ang tinatawag na callback hell. Pag maraming kailangang antayin na gaya ng pagkuha ng data sa internet, maaari itong magresulta sa magulo at nakakalitong code, whereas kung may *async await*, magmumukha na lamang itong normal na list of codes. 

### 23_closures_scope.js
* Dito sa part na ito, natutunan ko na ang *const* at *let* variables ay magagamit lamang sa sarili nilang block of code at hindi maaaring lumabas doon. Halimbawa, kapag nasa loob ito ng if-else block, dun lamang ito pwede tawagin muli. Though di ko pa maintindihan masyado ang nangyayari sa increment function sa loob ng createCounter(), umaasa akong mas maiintindihan ko ito pag lipas ng ilang araw. Base rin sa dicussion, nalaman ko na ang createCounter() function ay isang example kung paano gumagana ang mga *useState* sa react.