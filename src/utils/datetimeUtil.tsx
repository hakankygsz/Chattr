export const formatTimeAgo = (date: Date): string => {
    const now = Date.now();
    const diff = Math.floor((date.getTime() - now) / 1000);
    const absDiff = Math.abs(diff);
    const suffix = diff < 0 ? 'önce' : 'sonra';

    if (absDiff === 0) return 'şimdi';
    if (absDiff < 60) return `${absDiff} saniye ${suffix}`;
    const minutes = Math.floor(absDiff / 60);
    if (minutes < 60) return `${minutes} dakika ${suffix}`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} saat ${suffix}`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} gün ${suffix}`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} ay ${suffix}`;
    const years = Math.floor(months / 12);
    return `${years} yıl ${suffix}`;
};