"use client";

import getStats from "@/lib/getStats";
import useGetTransaction from "./useGetTransaction";

interface transactionSummary {
  category: string;
  total: number;
}

interface UseSmartInsightProps {
  transactionData: transactionSummary[];
}

const useSmartInsight = ({ transactionData }: UseSmartInsightProps) => {
  if (!transactionData || transactionData.length === 0) {
    return {
      insight: ["Belum ada data transaksi. Yuk mulai catat pengeluaranmu!"],
    };
  }

  if (transactionData.length < 3) {
    return {
      insight: [
        "Kamu baru mencatat sedikit kategori transaksi.",
        "Cobalah untuk menambahkan lebih banyak kategori agar insight lebih akurat.",
      ],
    };
  }

  // Urutkan dari total pengeluaran terbesar ke terkecil
  const sorted = [...transactionData].sort((a, b) => b.total - a.total);
  const [top1, top2, top3, top4] = sorted;
  const insight = [
    {
      title: "Pengeluaran Terbesar ⚠️",
      sentence: `Pengeluaran tertinggimu ada di kategori "${
        top1.category
      }", sebesar Rp. ${top1.total.toLocaleString()}.`,
      backgroundColor:
        "bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200",
      titleColor: "text-blue-900",
      textColor: "text-blue-800",
    },
    {
      title: "Berpotensi Naik 📈",
      sentence: `Disusul dengan kategori "${
        top2.category
      }" dengan pengeluaran sebesar Rp. ${top2.total.toLocaleString()}.`,
      backgroundColor:
        "bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200",
      titleColor: "text-green-900",
      textColor: "text-green-800",
    },
    {
      title: "Paling Hemat 💡",
      sentence: `Kategori dengan pengeluaran paling sedikit adalah "${
        top4?.category
      }" sebesar Rp. ${top4?.total.toLocaleString()} `,
      backgroundColor:
        "bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200",
      titleColor: "text-yellow-900",
      textColor: "text-yellow-800",
    },
    {
      title: "Rekomendasi 🎯",
      sentence: `Kamu bisa pertimbangkan mengurangi pengeluaran pada "${top1.category}" untuk menghemat.`,
      backgroundColor:
        "bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200",
      titleColor: "text-purple-900",
      textColor: "text-purple-800",
    },
  ];

  return {
    insight,
  };
};

export default useSmartInsight;
