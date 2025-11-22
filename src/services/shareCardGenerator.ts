export interface ShareCardData {
  rank: number;
  name: string;
  totalParticipants: number;
}

export const generateShareCard = async (data: ShareCardData): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d')!;

  const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bgGradient.addColorStop(0, '#0a0e27');
  bgGradient.addColorStop(1, '#1a1f3a');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let accentColor1, accentColor2;
  if (data.rank === 1) {
    accentColor1 = '#FFD700';
    accentColor2 = '#FFA500';
  } else if (data.rank === 2) {
    accentColor1 = '#C0C0C0';
    accentColor2 = '#A8A8A8';
  } else if (data.rank === 3) {
    accentColor1 = '#CD7F32';
    accentColor2 = '#B8860B';
  } else {
    accentColor1 = '#3B82F6';
    accentColor2 = '#8B5CF6';
  }

  ctx.fillStyle = accentColor1 + '15';
  ctx.fillRect(0, 0, 500, canvas.height);

  const decorGradient = ctx.createLinearGradient(500, 0, 500, canvas.height);
  decorGradient.addColorStop(0, accentColor1 + '00');
  decorGradient.addColorStop(1, accentColor2 + '20');
  ctx.fillStyle = decorGradient;
  ctx.fillRect(500, 0, 100, canvas.height);

  ctx.save();
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = accentColor1;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150 + i * 100, 200 + i * 100, 150, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
  ctx.fillText('INTERNSHIP HACKATHON', 80, 100);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 220px system-ui, -apple-system, sans-serif';
  ctx.fillText('#' + data.rank, 80, 360);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '600 28px system-ui, -apple-system, sans-serif';
  ctx.fillText('RANK ' + data.rank + ' OUT OF ' + data.totalParticipants, 80, 430);

  const cardX = 620;
  const cardY = 140;
  const cardWidth = 500;
  const cardHeight = 350;
  const radius = 20;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 20;

  const cardGradient = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardHeight);
  cardGradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
  cardGradient.addColorStop(1, 'rgba(255, 255, 255, 0.03)');
  ctx.fillStyle = cardGradient;

  ctx.beginPath();
  ctx.moveTo(cardX + radius, cardY);
  ctx.lineTo(cardX + cardWidth - radius, cardY);
  ctx.arcTo(cardX + cardWidth, cardY, cardX + cardWidth, cardY + radius, radius);
  ctx.lineTo(cardX + cardWidth, cardY + cardHeight - radius);
  ctx.arcTo(cardX + cardWidth, cardY + cardHeight, cardX + cardWidth - radius, cardY + cardHeight, radius);
  ctx.lineTo(cardX + radius, cardY + cardHeight);
  ctx.arcTo(cardX, cardY + cardHeight, cardX, cardY + cardHeight - radius, radius);
  ctx.lineTo(cardX, cardY + radius);
  ctx.arcTo(cardX, cardY, cardX + radius, cardY, radius);
  ctx.closePath();
  ctx.fill();

  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.stroke();

  const accentBarGradient = ctx.createLinearGradient(cardX, 0, cardX + cardWidth, 0);
  accentBarGradient.addColorStop(0, accentColor1);
  accentBarGradient.addColorStop(1, accentColor2);
  ctx.fillStyle = accentBarGradient;
  ctx.fillRect(cardX, cardY, cardWidth, 6);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 42px system-ui, -apple-system, sans-serif';
  ctx.fillText(data.name, cardX + 40, cardY + 90);

  const percentile = Math.round((data.rank / data.totalParticipants) * 100);
  ctx.fillStyle = accentColor1;
  ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
  ctx.fillText('🏆 TOP ' + percentile + '%', cardX + 40, cardY + 140);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '22px system-ui, -apple-system, sans-serif';
  ctx.fillText('Ranked ' + data.rank + ' out of ' + data.totalParticipants.toLocaleString() + ' participants', cardX + 40, cardY + 175);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cardX + 40, cardY + 210);
  ctx.lineTo(cardX + cardWidth - 40, cardY + 210);
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px system-ui, -apple-system, sans-serif';
  ctx.fillText('🚀 Turning Data Into Decisions', cardX + 40, cardY + 260);

  ctx.fillStyle = accentColor1;
  ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
  ctx.fillText('promptbi.ai', cardX + 40, cardY + 290);

  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.font = '600 18px system-ui, -apple-system, sans-serif';
  ctx.fillText('PROMPTBI', canvas.width - 40, canvas.height - 40);

  return canvas.toDataURL('image/png');
};

export const generateLinkedInPost = (rank: number, totalParticipants: number): string => {
  const percentile = Math.round((rank / totalParticipants) * 100);
  return `🎉 Just secured Rank #${rank} out of ${totalParticipants.toLocaleString()} participants in the @PromptBI Internship Hackathon! 🏆

Top ${percentile}% and climbing! 📈

Competing with ${totalParticipants.toLocaleString()} data minds across the continent taught me that data isn't just numbers on a screen — it's the language of business impact.

This hackathon pushed me to think like a business leader, not just an analyst. Real datasets. Real challenges. Real growth. 💡

Proud to be part of a movement transforming Africa's data landscape, one insight at a time. 🌍✨

👉 Ready to level up your data skills? Start here: promptbi.ai

#PromptBI #DataScience #Hackathon #AI #DataAnalytics #MachineLearning #DataStorytelling #AfricaTech #LearnToEarn #DataCareers #TechInAfrica`;
};

export const prepareLinkedInShare = async (data: ShareCardData): Promise<{ imageUrl: string; postText: string }> => {
  const imageUrl = await generateShareCard(data);
  const postText = generateLinkedInPost(data.rank, data.totalParticipants);

  return { imageUrl, postText };
};
