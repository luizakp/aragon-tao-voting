import { motion } from 'framer-motion'

export interface CardProps {
  title: string
  content: string
}

export function AboutCard({ title, content }: CardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl pt-7 pl-7 pr-10 pb-16 drop-shadow-sm"
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl text-gray font-semibold">{title}</h3>
      <p className="text-gray-400 mt-8 leading-7 text-[22px]">{content}</p>
    </motion.div>
  )
}
