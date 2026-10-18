import { useCallback, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { Cursor } from './ui.jsx';
import { Nav, Hero, Mirror, Proof } from './sections1.jsx';
import { Work, Sheet, Pipeline, Positions, Craft } from './sections2.jsx';
import { Diagnostic, Ways, Method, Faq, Record, Contact } from './sections3.jsx';
import { Demos, Library, Papers } from './sections4.jsx';

export default function App() {
  const [sheet, setSheet] = useState(null);
  const { scrollYProgress } = useScroll();
  const open = useCallback((id, el) => setSheet({ id, el }), []);
  const close = useCallback(() => setSheet(null), []);

  return (
    <>
      <a className="skip" href="#main">Skip to the content</a>
      <motion.div className="topbar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Mirror />
        <Proof />
        <Work onOpen={open} />
        <Pipeline />
        <Positions />
        <Craft />
        <Demos />
        <Library />
        <Diagnostic onOpen={open} />
        <Ways />
        <Method />
        <Faq />
        <Record />
        <Papers />
      </main>
      <Contact />
      <AnimatePresence>{sheet && <Sheet key={sheet.id} id={sheet.id} onClose={close} returnTo={sheet.el} />}</AnimatePresence>
      <div className="grain" aria-hidden="true" />
      <Cursor />
    </>
  );
}
