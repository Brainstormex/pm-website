"use client"

import React from 'react';
import { Article } from '@/types/common';
import { Card } from '@/components/Card/Card';


interface SubCategoryRendererProps {
  data: Article[];
}

const SubCategoryRenderer: React.FC<SubCategoryRendererProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className={""}>
        <h2>No articles found in this subcategory</h2>
      </div>
    );
  }

  return (
    <div className={""}>
      <div className={""}>
        {data.map((article, index) => (
          <Card
            key={index}
            data={article}
             />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryRenderer; 