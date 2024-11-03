'use client';

import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoCardProps {
  icon: LucideIcon;
  label: string;
  badgeColor: string;
  children: React.ReactNode;
}

export default function LogoCard({ icon: Icon, label, badgeColor, children }: LogoCardProps) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        {children}
        <Badge 
          className={`absolute -top-3 left-4 ${badgeColor} shadow-md transform group-hover:-translate-y-1 transition-transform duration-300`} 
          variant="secondary"
        >
          <Icon className="w-4 h-4 mr-1.5" />
          {label}
        </Badge>
      </div>
    </motion.div>
  );
}