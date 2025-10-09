import { motion } from "framer-motion";
import { HeartPulse, Brain, Sun, Activity } from "lucide-react";

export default function MuralSalud() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col items-center py-10 px-4 text-gray-800">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Equilibrio entre cuerpo y mente:
      </h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-10 text-center text-indigo-700"
      >
        mi bienestar a los 24 años
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
        <section className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
          <header className="flex items-center gap-2 mb-2">
            <Activity className="text-indigo-600" />
            <h2 className="text-xl font-semibold">
              Mi edad y actividades físicas
            </h2>
          </header>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Edad:</strong> 24 años
            </li>
            <li>
              <strong>Actividades:</strong> senderismo y fútbol
            </li>
            <li>
              <strong>Relación con la OMS:</strong> cumplen las recomendaciones
              si se practican 3+ veces por semana
            </li>
            <li>
              <strong>Meta personal:</strong> mantener rutina con senderismo,
              fútbol y ejercicios de fuerza
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
          <header className="flex items-center gap-2 mb-2">
            <Brain className="text-indigo-600" />
            <h2 className="text-xl font-semibold">Mi estilo de vida actual</h2>
          </header>
          <p>
            Dedico mucho tiempo al computador por estudios y entretenimiento, lo
            que me acerca a un estilo sedentario. Mi alimentación es
            moderadamente saludable, aunque el estrés y la falta de sueño
            influyen en mi bienestar general.
          </p>
        </section>

        <section className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
          <header className="flex items-center gap-2 mb-2">
            <HeartPulse className="text-indigo-600" />
            <h2 className="text-xl font-semibold">
              Factores que influyen en mi salud
            </h2>
          </header>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Biológicos:</strong> antecedentes familiares de
              hipertensión y obesidad
            </li>
            <li>
              <strong>Psicológicos:</strong> ansiedad moderada en épocas de
              examen
            </li>
            <li>
              <strong>Sociales:</strong> buena red familiar, aunque a veces me
              aíslo por cansancio
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
          <header className="flex items-center gap-2 mb-2">
            <Sun className="text-indigo-600" />
            <h2 className="text-xl font-semibold">Plan de mejora</h2>
          </header>
          <ul className="list-disc list-inside space-y-2">
            <li>Incorporar caminatas y pausas activas diarias</li>
            <li>Practicar yoga o estiramientos</li>
            <li>Establecer horarios fijos de descanso</li>
            <li>Reducir tiempo frente a pantallas</li>
            <li>Equilibrar estudio, descanso y vida social</li>
          </ul>
        </section>
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 max-w-2xl text-center italic text-lg text-indigo-700"
      >
        “La salud no solo depende del cuerpo, sino del equilibrio entre lo que
        pienso, siento y hago.”
      </motion.blockquote>
    </main>
  );
}
