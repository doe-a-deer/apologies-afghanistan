import React, { useState } from 'react';
import { ChevronLeft, Globe } from 'lucide-react';

// Sample data structure for apologies
const SAMPLE_APOLOGIES = [
  {
    id: 1,
    english: "I apologize for my country's role in the invasion and occupation that destroyed so many lives and communities. For twenty years we promised stability and partnership, then abandoned Afghanistan overnight. I apologize for the arrogance of believing we could rebuild a nation we never understood. I am learning to listen to Afghan voices, support Afghan-led organizations, and advocate for refugee resettlement in my community.",
    dari: "من برای نقش کشورم در حمله و اشغالی که بسیاری از زندگی‌ها و جوامع را نابود کرد، عذرخواهی می‌کنم. برای بیست سال ما وعده ثبات و مشارکت دادیم، سپس یک شبه افغانستان را رها کردیم. من برای تکبر باور به اینکه می‌توانیم کشوری را که هرگز درک نکرده بودیم بازسازی کنیم، عذرخواهی می‌کنم. من در حال یادگیری گوش دادن به صدای افغان‌ها، حمایت از سازمان‌های به رهبری افغان‌ها و حمایت از اسکان مجدد پناهندگان در جامعه خود هستم.",
    dariTranslit: "Man barāye naqsh-e keshwaram dar hamle wa eshghāli ke besyāri az zendegi-hā wa jawāme' rā nābud kard, ozrkhāhi mikonam. Barāye bist sāl mā wa'de-ye sabāt wa moshārakat dādim, sepas yak shabe Afghānestān rā rahā kardim. Man barāye takabbor-e bāwar be inke mitawānim keshwari rā ke hargez dark nakarde budim bāzsāzi konim, ozrkhāhi mikonam. Man dar hāl-e yādgiri-ye gush dādan be sedā-ye Afghān-hā, hemāyat az sāzmān-hā-ye be rahbari-ye Afghān-hā wa hemāyat az eskān-e mojadad-e panāhandegān dar jāme'e khod hastam.",
    pashto: "زه د خپل هیواد د هغه برید او قبضې لپاره چې ډیری ژوندونه او ټولنې یې ویجاړې کړې، بخښنه غواړم. شل کاله موږ د ثبات او شراکت ژمنه وکړه، بیا یوه شپه افغانستان پریښود. زه د دې غرور لپاره بخښنه غواړم چې باور یې درلود چې موږ کولی شو یو هیواد بیا جوړ کړو چې موږ یې هیڅکله نه پوهیدل. زه د افغانانو غږونو ته د غوږ نیولو زده کوم، د افغانانو په مشرۍ سازمانونو ملاتړ کوم، او په خپله ټولنه کې د کډوالو د میشته کیدو لپاره مدافعه کوم.",
    pashtoTranslit: "Za də khpal heywād də hagha bareed aw qabze lāpāra che ḍere zhwanduna aw ṭolane ye wijāṛe kṛe, bakhkhāna ghwāṛam. Shel kāla mūng də sabāt aw sherākat jhamana wakṛa, byā yawa shpa Afghānestān preykhod. Za də de ghorūr lāpāra bakhkhāna ghwāṛam che bāwar ye darlod che mūng koley sho yaw heywād byā joṛ kṛo che mūng ye hets kala na pohidal. Za də Afghānāno ghaghgūno ta də ghogh niwalo zada kawam, də Afghānāno pa mashrē sāzmānūno malātaṛ kawam, aw pa khpala ṭolana ke də kaḍwālo də meshte kedalo lāpāra modāfe'a kawam.",
    country: "United States",
    name: "Anonymous",
    date: "2025-01-15"
  },
  {
    id: 2,
    english: "I apologize for the silence. For watching the news of Kabul's fall and then scrolling past. For the privilege of forgetting while millions cannot. I apologize for not pushing my government to honor its promises to interpreters and allies who risked everything. I will donate to organizations providing direct aid, educate myself on Afghan history from Afghan scholars, and refuse to let this become another war we stop talking about.",
    dari: "من برای سکوت عذرخواهی می‌کنم. برای تماشای اخبار سقوط کابل و سپس اسکرول کردن. برای امتیاز فراموش کردن در حالی که میلیون‌ها نفر نمی‌توانند. من برای فشار نیاوردن به دولتم برای احترام به وعده‌هایش به مترجمان و متحدانی که همه چیز را به خطر انداختند، عذرخواهی می‌کنم. من به سازمان‌هایی که کمک مستقیم ارائه می‌دهند کمک مالی خواهم کرد، از محققان افغان در مورد تاریخ افغانستان آموزش خواهم دید، و اجازه نخواهم داد که این جنگ دیگری شود که دیگر در مورد آن صحبت نمی‌کنیم.",
    dariTranslit: "Man barāye sokut ozrkhāhi mikonam. Barāye tamāshā-ye akhbār-e soqūt-e Kābul wa sepas eskrol kardan. Barāye emtiyāz-e farāmush kardan dar hāli ke milyūn-hā nafar nemitawānand. Man barāye feshār na-āwardan be dawlatam barāye ehteram be wa'de-hāyash be motarjemān wa mottahedāni ke hame chiz rā be khatar andākhtand, ozrkhāhi mikonam. Man be sāzmān-hāyi ke komak-e mostaqim arā'e midahand komak-e māli khāham kard, az mohaqqeqān-e Afghān dar mawred-e tārikh-e Afghānestān āmuzesh khāham did, wa ejāze nakhāham dād ke in jang-e digari shawad ke digar dar mawred-e ān sohbat nemikonim.",
    pashto: "زه د چوپتیا لپاره بخښنه غواړم. د کابل د ړنګیدو خبرونه لیدلو او بیا سکرول کولو لپاره. د هغه امتیاز لپاره چې هیرول کیږي پداسې حال کې چې میلیونونه نشي کولی. زه د خپل حکومت په دې نه فشار راوړلو لپاره چې د ژباړونکو او متحدینو ته خپلې ژمنې ته درناوی وکړي چې هرڅه یې په خطر کې اچولي وو، بخښنه غواړم. زه هغو سازمانونو ته چې مستقیمه مرسته وړاندې کوي مالي مرسته به کوم، د افغان پوهانو څخه به د افغانستان تاریخ په اړه ځان روزم، او اجازه به نه ورکوم چې دا یوه بله جګړه شي چې موږ یې په اړه خبرې کول بند کړو.",
    pashtoTranslit: "Za də choptyā lāpāra bakhkhāna ghwāṛam. Də Kābul də ṛanggedalo khabruna leedalo aw byā eskrol kawalo lāpāra. Də hagha emtiyāz lāpāra che herwal keġi pa dāse hāl ke che melyūnūna nashi kawale. Za də khpal hukūmat pa de na feshār rāwṛalo lāpāra che də jhabāṛūnko aw muttahedino ta khpale jhamane ta dernāway wakṛi che hartsah ye pa khatar ke āchuli wo, bakhkhāna ghwāṛam. Za hagho sāzmānūno ta che mostaqeema marasta wraānde kawi māli marasta ba kawam, də Afghān pohāno tsakha ba də Afghānestān tārikh pa āṛa dzān rozam, aw ejāza ba na warkawam che dā yawa bala jegṛa shi che mūng ye pa āṛa khabare kawal band kṛo.",
    country: "United Kingdom",
    name: "Anonymous",
    date: "2025-01-18"
  },
  {
    id: 3,
    english: "I apologize for my complicity in a media environment that reduced Afghanistan to a backdrop for Western heroism, that amplified military voices while silencing Afghan civilians, that moved on to the next crisis without accountability. As a journalist, I failed to center Afghan perspectives, to question the narratives I was fed, to demand coverage that honored the complexity and humanity of Afghan people. I commit to seeking out and amplifying Afghan journalists, writers, and artists, and to refusing assignments that exploit tragedy without context or care.",
    dari: "من برای همدستی خود در یک محیط رسانه‌ای که افغانستان را به پس‌زمینه‌ای برای قهرمانی غربی تبدیل کرد، که صداهای نظامی را تقویت کرد در حالی که غیرنظامیان افغان را خاموش کرد، که بدون پاسخگویی به بحران بعدی رفت، عذرخواهی می‌کنم. به عنوان یک روزنامه‌نگار، من در متمرکز کردن دیدگاه‌های افغان، در زیر سوال بردن روایت‌هایی که به من داده می‌شد، در تقاضای پوششی که پیچیدگی و انسانیت مردم افغانستان را محترم می‌شمرد، شکست خوردم. من متعهد می‌شوم که روزنامه‌نگاران، نویسندگان و هنرمندان افغان را جستجو و تقویت کنم، و از پذیرش مأموریت‌هایی که بدون زمینه یا مراقبت از فاجعه سوء استفاده می‌کنند، امتناع کنم.",
    dariTranslit: "Man barāye hamdasti-ye khod dar yak mohit-e resāne-i ke Afghānestān rā be pas-zamine-i barāye qahremāni-ye gharbi tabdil kard, ke sedā-hā-ye nezāmi rā taqwiyat kard dar hāli ke gheyr-e nezāmiyān-e Afghān rā khāmush kard, ke bedun-e pāsokhgu'i be bohrān-e ba'di raft, ozrkhāhi mikonam. Be onwān-e yak ruznāme-negār, man dar motamarkez kardan-e didgāh-hā-ye Afghān, dar zir-e so'āl bordan-e rewāyat-hāyi ke be man dāde mishod, dar taqāzā-ye pūsheshi ke pichidegi wa ensāniyat-e mardom-e Afghānestān rā mohtaram mishomord, shekast khordam. Man mota'ahed misham ke ruznāme-negārān, nevisandegān wa honarmandān-e Afghān rā jostoju wa taqwiyat konam, wa az pazirash-e ma'muriyat-hāyi ke bedun-e zamine yā morāqebat az fāje'a su'-estefāde mikonand, emtenā' konam.",
    pashto: "زه په یوه رسنیزه چاپیریال کې د خپلې شراکت لپاره بخښنه غواړم چې افغانستان د غربي اتلولۍ لپاره شالید ته بدل کړ، چې نظامي غږونه یې پیاوړي کړل پداسې حال کې چې افغان ملکیان یې خاموش کړل، چې پرته له حساب ورکولو بلې بحران ته لاړ. د یوه ژورنالیست په توګه، زه د افغان لیدلورو په متمرکز کولو کې، د هغه کیسو په پوښتنه کولو کې چې ماته ورکړل شوي وو، د داسې پوښښ په غوښتنه کې چې د افغان خلکو پیچلتیا او انسانیت ته درناوی کوي، ناکام شوم. زه ژمنه کوم چې د افغان ژورنالیستان، لیکوالان او هنرمندان په لټون او پیاوړي کولو کې، او د داسې دندو څخه په ډډه کولو کې چې پرته له شالید یا پاملرنې له فاجعې څخه ناوړه ګټه پورته کوي.",
    pashtoTranslit: "Za pa yawa rasaneeza chāperyāl ke də khpale sherākat lāpāra bakhkhāna ghwāṛam che Afghānestān də gharbi atlawale lāpāra shālid ta badal kṛ, che nezāmi ghaghgūna ye pyāwaṛi kṛal pa dāse hāl ke che Afghān malkiyān ye khāmush kṛal, che parta la hesāb warkawalo bale bohrān ta lāṛ. Də yawa jornālest pa ṭogə, za də Afghān leedloro pa motamarkez kawalo ke, də hagha kesū pa poxtana kawalo ke che māta warkṛal shawi wo, də dāse poxex pa ghwextana ke che də Afghān khalko pechlatiyā aw ensāniyat ta dernāway kawi, nākām shwam. Za jhamana kawam che də Afghān jornālestān, lekwālān aw honarmandān pa laṭon aw pyāwaṛi kawalo ke, aw də dāse dando tsakha pa ḍeḍa kawalo ke che parta la shālid yā pāmalarne la fāje'e tsakha nāwṛa gaṭa porta kawi.",
    country: "Canada",
    name: "J.M.",
    date: "2025-01-20"
  }
];

// Seeded translation function (simulates API translation)
const translateText = async (text, targetLang) => {
  // In production, this would call Google Translate API or similar
  // For now, we'll use our sample data structure
  await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
  return { translated: text, transliterated: text };
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedApology, setSelectedApology] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [useTranslit, setUseTranslit] = useState(false);
  
  // Submission form state
  const [formData, setFormData] = useState({
    apology: '',
    name: '',
    country: '',
    isAnonymous: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Admin state (for demo purposes)
  const [isAdmin, setIsAdmin] = useState(false);
  const [pendingApologies, setPendingApologies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission and translation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ apology: '', name: '', country: '', isAnonymous: true });
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setCurrentPage('home');
    }, 3000);
  };

  const renderHome = () => (
    <div className="page-content">
      <div className="home-header">
        <h1 className="site-title">Apologies to Afghanistan 🇦🇫-🤍-🇺🇸</h1>
        <div className="title-line"></div>
      </div>
      
      <div className="mission-statement">
        <p className="mission-text">
          This is a public archive where people from Western countries can submit written apologies 
          to the people of Afghanistan for the ways Western governments, institutions, militaries, 
          media, and societies have harmed, destabilized, occupied, or abandoned the country over 
          the past several decades.
        </p>
        
        <p className="mission-text">
          This space exists to create accountability and humility from Western individuals. It does 
          not speak for Afghans. It does not ask for forgiveness. It acknowledges that apologies do 
          not repair material harm, but argues that naming responsibility and refusing amnesia matters.
        </p>
        
        <p className="mission-text">
          This project is not an act of hating America, rejecting its ideals, or condemning those 
          who served in uniform. It is rooted in the belief that a confident patriotism is compatible 
          with moral reckoning, and that democratic societies are strongest when they can confront 
          the consequences of their power honestly.
        </p>
        
        <p className="mission-text emphasis">
          This is not a debate forum. This is not a comment section. This is not a place for Afghans 
          to be interrogated or asked to forgive. This is an act of record-keeping and acknowledgment.
        </p>
      </div>
      
      <div className="home-actions">
        <button className="action-button primary" onClick={() => setCurrentPage('submit')}>
          Submit an Apology
        </button>
        <button className="action-button secondary" onClick={() => setCurrentPage('archive')}>
          Read the Archive
        </button>
      </div>
    </div>
  );

  const renderSubmit = () => (
    <div className="page-content">
      <button className="back-button" onClick={() => setCurrentPage('home')}>
        <ChevronLeft size={20} /> Back
      </button>
      
      <div className="submit-header">
        <h2 className="page-title">Submit an Apology</h2>
        <div className="title-line"></div>
      </div>
      
      {submitSuccess ? (
        <div className="success-message">
          <p>Your apology has been submitted for review.</p>
          <p className="success-sub">Thank you for taking responsibility.</p>
        </div>
      ) : (
        <>
          <div className="submission-guidance">
            <p className="guidance-title">Before you write:</p>
            <ul className="guidance-list">
              <li>What are you apologizing for, specifically?</li>
              <li>What actions, policies, or systems are you taking responsibility for?</li>
              <li>What have you learned?</li>
              <li>What will you do differently (listen, advocate, vote, donate, etc)?</li>
            </ul>
            <p className="guidance-note">
              Be specific. Avoid abstraction. This is not about personal growth stories or 
              self-congratulation. This is about naming what was done and taking responsibility.
            </p>
          </div>
          
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Apology</label>
              <textarea
                className="form-textarea"
                value={formData.apology}
                onChange={(e) => setFormData({...formData, apology: e.target.value})}
                placeholder="I apologize for..."
                rows={12}
                required
                minLength={100}
              />
              <span className="form-hint">{formData.apology.length} characters</span>
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">
                  Name <span className="optional">(optional)</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Anonymous"
                  disabled={formData.isAnonymous}
                />
              </div>
              
              <div className="form-group half">
                <label className="form-label">
                  Country <span className="optional">(optional)</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  placeholder="Your country"
                  disabled={formData.isAnonymous}
                />
              </div>
            </div>
            
            <div className="form-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                />
                <span>Submit anonymously (recommended)</span>
              </label>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit for Review'}
            </button>
            
            <p className="form-footer">
              All submissions are reviewed before publication. Hate speech, dehumanization, 
              propaganda, or content that blames Afghans will be rejected.
            </p>
          </form>
        </>
      )}
    </div>
  );

  const renderArchive = () => (
    <div className="page-content">
      <button className="back-button" onClick={() => setCurrentPage('home')}>
        <ChevronLeft size={20} /> Back
      </button>
      
      <div className="archive-header">
        <h2 className="page-title">Archive</h2>
        <div className="title-line"></div>
        <p className="archive-count">{SAMPLE_APOLOGIES.length} apologies</p>
      </div>
      
      <div className="apology-grid">
        {SAMPLE_APOLOGIES.map((apology) => (
          <div 
            key={apology.id}
            className="apology-card"
            onClick={() => {
              setSelectedApology(apology);
              setCurrentPage('detail');
            }}
          >
            <div className="apology-preview">
              {apology.english.substring(0, 180)}...
            </div>
            <div className="apology-meta">
              <span className="apology-author">
                {apology.name}
                {apology.country && ` · ${apology.country}`}
              </span>
              <span className="apology-date">{apology.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetail = () => {
    if (!selectedApology) return null;
    
    const getDisplayText = () => {
      if (selectedLanguage === 'english') return selectedApology.english;
      if (selectedLanguage === 'dari') {
        return useTranslit ? selectedApology.dariTranslit : selectedApology.dari;
      }
      if (selectedLanguage === 'pashto') {
        return useTranslit ? selectedApology.pashtoTranslit : selectedApology.pashto;
      }
    };
    
    return (
      <div className="page-content detail-page">
        <button className="back-button" onClick={() => setCurrentPage('archive')}>
          <ChevronLeft size={20} /> Back to Archive
        </button>
        
        <div className="detail-header">
          <div className="language-selector">
            <button 
              className={`lang-button ${selectedLanguage === 'english' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('english')}
            >
              English
            </button>
            <button 
              className={`lang-button ${selectedLanguage === 'dari' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('dari')}
            >
              دری (Dari)
            </button>
            <button 
              className={`lang-button ${selectedLanguage === 'pashto' ? 'active' : ''}`}
              onClick={() => setSelectedLanguage('pashto')}
            >
              پښتو (Pashto)
            </button>
          </div>
          
          {selectedLanguage !== 'english' && (
            <div className="translit-toggle">
              <label>
                <input
                  type="checkbox"
                  checked={useTranslit}
                  onChange={(e) => setUseTranslit(e.target.checked)}
                />
                <span>Show Latin transliteration</span>
              </label>
            </div>
          )}
        </div>
        
        <div 
          className={`apology-text ${selectedLanguage !== 'english' && !useTranslit ? 'rtl' : ''}`}
          dir={selectedLanguage !== 'english' && !useTranslit ? 'rtl' : 'ltr'}
        >
          {getDisplayText()}
        </div>
        
        <div className="detail-meta">
          <div className="meta-line"></div>
          <div className="meta-info">
            <span>{selectedApology.name}</span>
            {selectedApology.country && <span> · {selectedApology.country}</span>}
            <span> · {selectedApology.date}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .app {
          min-height: 100vh;
          background: linear-gradient(to bottom, #967969 0%, #C4A484 100%);
          color: #2d2520;
          font-family: 'Crimson Text', 'Georgia', serif;
          line-height: 1.8;
        }
        
        .page-content {
          max-width: 720px;
          margin: 0 auto;
          padding: 80px 32px;
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Home Page */
        .home-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .site-title {
          font-size: 48px;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: #ffffff;
          margin-bottom: 16px;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }
        
        .title-line {
          width: 80px;
          height: 1px;
          background: #5a4a3d;
          margin: 0 auto;
        }
        
        .mission-statement {
          margin-bottom: 60px;
        }
        
        .mission-text {
          font-size: 18px;
          margin-bottom: 28px;
          color: #3d3229;
          font-weight: 300;
        }
        
        .mission-text.emphasis {
          color: #2d2520;
          font-style: italic;
          border-left: 2px solid #5a4a3d;
          padding-left: 24px;
          margin-top: 40px;
        }
        
        .home-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .action-button {
          padding: 16px 40px;
          font-size: 16px;
          font-family: 'Crimson Text', 'Georgia', serif;
          cursor: pointer;
          border: none;
          background: none;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        
        .action-button.primary {
          background: #6d5847;
          color: #ffffff;
          border: 1px solid #5a4a3d;
        }
        
        .action-button.primary:hover {
          background: #7d6857;
          border-color: #6d5847;
        }
        
        .action-button.secondary {
          color: #3d3229;
          border: 1px solid #5a4a3d;
        }
        
        .action-button.secondary:hover {
          color: #2d2520;
          border-color: #4a3a2d;
        }
        
        /* Navigation */
        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #5a4a3d;
          font-size: 15px;
          cursor: pointer;
          margin-bottom: 40px;
          font-family: 'Crimson Text', 'Georgia', serif;
          transition: color 0.2s ease;
          padding: 0;
        }
        
        .back-button:hover {
          color: #3d3229;
        }
        
        /* Page Headers */
        .submit-header,
        .archive-header {
          margin-bottom: 50px;
        }
        
        .page-title {
          font-size: 36px;
          font-weight: 400;
          color: #2d2520;
          margin-bottom: 12px;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }
        
        /* Submit Page */
        .submission-guidance {
          background: rgba(109, 88, 71, 0.15);
          border: 1px solid rgba(90, 74, 61, 0.3);
          padding: 32px;
          margin-bottom: 40px;
        }
        
        .guidance-title {
          font-size: 18px;
          color: #2d2520;
          margin-bottom: 16px;
          font-weight: 400;
        }
        
        .guidance-list {
          list-style: none;
          margin-bottom: 20px;
        }
        
        .guidance-list li {
          padding-left: 24px;
          position: relative;
          margin-bottom: 12px;
          color: #3d3229;
          font-size: 16px;
        }
        
        .guidance-list li:before {
          content: '—';
          position: absolute;
          left: 0;
          color: #5a4a3d;
        }
        
        .guidance-note {
          font-size: 15px;
          color: #4a3a2d;
          font-style: italic;
          line-height: 1.6;
        }
        
        .submission-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group.half {
          flex: 1;
          min-width: 200px;
        }
        
        .form-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .form-label {
          font-size: 15px;
          color: #3d3229;
          font-weight: 400;
        }
        
        .optional {
          color: #5a4a3d;
          font-size: 14px;
        }
        
        .form-textarea,
        .form-input {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(90, 74, 61, 0.3);
          color: #2d2520;
          padding: 16px;
          font-size: 16px;
          font-family: 'Crimson Text', 'Georgia', serif;
          line-height: 1.7;
          transition: border-color 0.2s ease;
        }
        
        .form-textarea:focus,
        .form-input:focus {
          outline: none;
          border-color: rgba(90, 74, 61, 0.6);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 200px;
        }
        
        .form-hint {
          font-size: 13px;
          color: #5a4a3d;
          text-align: right;
        }
        
        .form-checkbox {
          display: flex;
          align-items: center;
        }
        
        .form-checkbox label {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          color: #3d3229;
          font-size: 15px;
        }
        
        .form-checkbox input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        
        .submit-button {
          padding: 18px 48px;
          background: #6d5847;
          border: 1px solid #5a4a3d;
          color: #ffffff;
          font-size: 16px;
          font-family: 'Crimson Text', 'Georgia', serif;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          align-self: flex-start;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #7d6857;
          border-color: #6d5847;
        }
        
        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .form-footer {
          font-size: 14px;
          color: #4a3a2d;
          line-height: 1.6;
          font-style: italic;
        }
        
        .success-message {
          text-align: center;
          padding: 80px 32px;
          animation: fadeIn 0.6s ease-out;
        }
        
        .success-message p {
          font-size: 24px;
          color: #2d2520;
          margin-bottom: 12px;
        }
        
        .success-sub {
          font-size: 18px;
          color: #3d3229;
          font-style: italic;
        }
        
        /* Archive Page */
        .archive-count {
          font-size: 15px;
          color: #4a3a2d;
          margin-top: 8px;
        }
        
        .apology-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .apology-card {
          background: rgba(109, 88, 71, 0.15);
          border: 1px solid rgba(90, 74, 61, 0.3);
          padding: 28px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .apology-card:hover {
          border-color: rgba(90, 74, 61, 0.5);
          background: rgba(109, 88, 71, 0.2);
        }
        
        .apology-preview {
          font-size: 17px;
          line-height: 1.7;
          color: #3d3229;
          margin-bottom: 20px;
        }
        
        .apology-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid rgba(90, 74, 61, 0.3);
          font-size: 14px;
          color: #5a4a3d;
        }
        
        .apology-author {
          color: #4a3a2d;
        }
        
        .apology-date {
          color: #5a4a3d;
        }
        
        /* Detail Page */
        .detail-page {
          max-width: 800px;
        }
        
        .detail-header {
          margin-bottom: 40px;
        }
        
        .language-selector {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .lang-button {
          padding: 10px 24px;
          background: rgba(109, 88, 71, 0.15);
          border: 1px solid rgba(90, 74, 61, 0.3);
          color: #3d3229;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Crimson Text', 'Georgia', serif;
        }
        
        .lang-button:hover {
          border-color: rgba(90, 74, 61, 0.5);
        }
        
        .lang-button.active {
          background: #6d5847;
          border-color: #5a4a3d;
          color: #ffffff;
        }
        
        .translit-toggle {
          margin-top: 16px;
        }
        
        .translit-toggle label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #4a3a2d;
          font-size: 14px;
          cursor: pointer;
        }
        
        .translit-toggle input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        
        .apology-text {
          font-size: 20px;
          line-height: 1.9;
          color: #2d2520;
          margin-bottom: 50px;
          padding: 40px 0;
        }
        
        .apology-text.rtl {
          text-align: right;
          font-family: 'Noto Nastaliq Urdu', 'Scheherazade New', serif;
          font-size: 22px;
          line-height: 2.2;
        }
        
        .detail-meta {
          margin-top: 60px;
        }
        
        .meta-line {
          width: 60px;
          height: 1px;
          background: #5a4a3d;
          margin-bottom: 16px;
        }
        
        .meta-info {
          font-size: 14px;
          color: #5a4a3d;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .page-content {
            padding: 60px 24px;
          }
          
          .site-title {
            font-size: 36px;
          }
          
          .page-title {
            font-size: 28px;
          }
          
          .mission-text {
            font-size: 16px;
          }
          
          .home-actions {
            flex-direction: column;
          }
          
          .action-button {
            width: 100%;
          }
          
          .form-row {
            flex-direction: column;
          }
          
          .apology-text {
            font-size: 18px;
          }
          
          .apology-text.rtl {
            font-size: 20px;
          }
        }
        
        /* Font Loading */
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:wght@300;400&family=Noto+Nastaliq+Urdu:wght@400;600&display=swap');
      `}</style>
      
      {currentPage === 'home' && renderHome()}
      {currentPage === 'submit' && renderSubmit()}
      {currentPage === 'archive' && renderArchive()}
      {currentPage === 'detail' && renderDetail()}
    </div>
  );
};

export default App;
