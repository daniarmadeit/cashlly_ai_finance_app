# Правила адаптивной верстки Cashlly AI Finance App

## 🎯 Основные принципы

### 1. Всегда используй Flex-based layout
```typescript
// ✅ ПРАВИЛЬНО
container: {
  flex: 1,
  padding: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
}

// ❌ НЕПРАВИЛЬНО
container: {
  width: 350,  // фиксированная ширина
  height: 600, // фиксированная высота
}
```

### 2. Динамическое вычисление размеров
Используй `useResponsive` hook для всех компонентов с адаптивными размерами:

```typescript
import { useResponsive } from '@/hooks';

const {
  screenWidth,
  contentWidth,
  quickActionWidth,
  quickActionHeight,
  getResponsiveTypography,
} = useResponsive();
```

### 3. Адаптивная типографика - ОБЯЗАТЕЛЬНО

**КРИТИЧЕСКИ ВАЖНО:** Все тексты должны использовать адаптивную типографику для предотвращения переносов.

```typescript
// ✅ ПРАВИЛЬНО - адаптивный текст
const { getResponsiveTypography } = useResponsive();

const labelStyle = getResponsiveTypography('body2', {
  minScale: 0.75,  // минимум 75% от базового размера
  maxScale: 1.0,   // максимум 100%
});

<Text
  style={labelStyle}
  numberOfLines={1}           // ОБЯЗАТЕЛЬНО для кнопок/лейблов
  adjustsFontSizeToFit        // ОБЯЗАТЕЛЬНО
  minimumFontScale={0.7}      // ОБЯЗАТЕЛЬНО
>
  Top Up
</Text>

// ❌ НЕПРАВИЛЬНО - статичный текст
<Text style={typography.body2}>
  Top Up
</Text>
```

### 4. Выбор minScale и maxScale

**Для кнопок и коротких лейблов:**
```typescript
const style = getResponsiveTypography('body2', {
  minScale: 0.75,  // более агрессивное уменьшение
  maxScale: 1.0,
});
```

**Для навигации:**
```typescript
const style = getResponsiveTypography('headline', {
  minScale: 0.8,
  maxScale: 1.0,
});
```

**Для основного текста:**
```typescript
const style = getResponsiveTypography('body', {
  minScale: 0.85,  // более мягкое уменьшение
  maxScale: 1.0,
});
```

## 🔒 Защита от переноса текста

### Проблема
На маленьких экранах текст переносится посередине слова:
- "Withdraw" → "With draw"
- "Request" → "Requ est"

### Решение (3 обязательных свойства)
```typescript
<Text
  numberOfLines={1}           // 1. Ограничить одной строкой
  adjustsFontSizeToFit        // 2. Автоматически уменьшить размер
  minimumFontScale={0.7}      // 3. Минимум 70% от размера
  style={responsiveStyle}
>
  {text}
</Text>
```

## 📐 Размеры компонентов

### Используй пропорциональное масштабирование
```typescript
// ✅ ПРАВИЛЬНО - динамический расчёт
const { quickActionWidth, quickActionHeight } = useResponsive();

<QuickActionButton
  width={quickActionWidth}
  height={quickActionHeight}
/>

// ❌ НЕПРАВИЛЬНО - фиксированные размеры
<QuickActionButton
  width={88}
  height={86}
/>
```

### Расчёт размеров в useResponsive
```typescript
// Пример для Quick Actions
const quickActionGap = 12;
const quickActionCount = 4;
const totalGaps = (quickActionCount - 1) * quickActionGap;

const quickActionSize = Math.min(
  (contentWidth - totalGaps) / quickActionCount,
  88 // max size из Figma
);

const quickActionWidth = quickActionSize;
const quickActionHeight = Math.round(quickActionSize * (86 / 88)); // сохраняем aspect ratio
```

## 🖼️ Картинки и изображения

```typescript
// ✅ ПРАВИЛЬНО
<Image
  source={avatar}
  style={styles.avatar}
  resizeMode="cover"  // или "contain"
/>

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
  },
});
```

## 📱 SafeArea и ScrollView

### SafeAreaView - обязательно для экранов
```typescript
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={styles.container}>
  <ScrollView contentContainerStyle={styles.content}>
    {/* контент */}
  </ScrollView>
</SafeAreaView>
```

### ScrollView для длинного контента
```typescript
<ScrollView
  contentContainerStyle={{ paddingBottom: 20 }}
  showsVerticalScrollIndicator={false}
>
  {/* контент */}
</ScrollView>
```

## 🎨 Константы и токены

### Всегда используй константы из дизайн-системы
```typescript
import { colors, typography, spacing, layout } from '@/constants';

// ✅ ПРАВИЛЬНО
backgroundColor: colors.gray100,
padding: spacing.xl,
borderRadius: layout.borderRadius.md,

// ❌ НЕПРАВИЛЬНО
backgroundColor: '#050505',
padding: 20,
borderRadius: 12,
```

## 🏗️ Структура компонентов

### Шаблон адаптивного компонента
```typescript
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants';
import { useResponsive } from '@/hooks';

interface MyComponentProps {
  title: string;
  onPress: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onPress }) => {
  const { getResponsiveTypography, contentWidth } = useResponsive();

  const titleStyle = getResponsiveTypography('headline', {
    minScale: 0.85,
    maxScale: 1.0,
  });

  return (
    <TouchableOpacity
      style={[styles.container, { width: contentWidth }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={titleStyle}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.7}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray200,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
});
```

## 📊 Поддерживаемые экраны

- **Минимум:** 360px (маленькие Android)
- **Базовый:** 428px (iPhone 14 Pro) - размеры из Figma
- **Средний:** 375px - 414px (iPhone SE, iPhone 13)
- **Максимум:** 1024px+ (планшеты, с ограничением maxScale: 1.0)

## ⚠️ Частые ошибки

### ❌ НЕ делай так:

1. **Статичная типографика без useResponsive**
   ```typescript
   <Text style={typography.body2}>Hello</Text>
   ```

2. **Фиксированные размеры без расчёта**
   ```typescript
   width: 300,
   height: 200,
   ```

3. **Отсутствие numberOfLines для лейблов**
   ```typescript
   <Text style={labelStyle}>Long Label</Text>
   ```

4. **Прямое использование пикселей вместо констант**
   ```typescript
   padding: 16,
   backgroundColor: '#050505',
   ```

5. **Игнорирование SafeArea**
   ```typescript
   <View style={{ flex: 1 }}>...</View>
   ```

### ✅ ПРАВИЛЬНО:

1. **Адаптивная типографика**
   ```typescript
   const style = getResponsiveTypography('body2', { minScale: 0.8 });
   <Text style={style} numberOfLines={1} adjustsFontSizeToFit>Hello</Text>
   ```

2. **Динамические размеры**
   ```typescript
   const { contentWidth } = useResponsive();
   <View style={{ width: contentWidth }}>...</View>
   ```

3. **Защита от переноса**
   ```typescript
   numberOfLines={1}
   adjustsFontSizeToFit
   minimumFontScale={0.7}
   ```

4. **Константы дизайн-системы**
   ```typescript
   padding: spacing.lg,
   backgroundColor: colors.gray100,
   ```

5. **SafeArea для экранов**
   ```typescript
   <SafeAreaView style={{ flex: 1 }}>...</SafeAreaView>
   ```

## 🧪 Чек-лист перед коммитом

- [ ] Все компоненты используют `useResponsive` hook
- [ ] Все тексты имеют адаптивную типографику
- [ ] Все кнопки/лейблы имеют `numberOfLines={1}` + `adjustsFontSizeToFit`
- [ ] Используются константы из `@/constants` (colors, typography, spacing, layout)
- [ ] Нет фиксированных размеров без динамического расчёта
- [ ] Экраны используют SafeAreaView
- [ ] Длинный контент обёрнут в ScrollView
- [ ] Картинки имеют `resizeMode`
- [ ] Тестировано на разных размерах экранов

## 📚 Ссылки на документацию

- `docs/STYLE_GUIDE.md` - полная дизайн-система
- `docs/PROJECT_MEMORY.json` - структура проекта и прогресс
- `src/hooks/useResponsive.ts` - hook для адаптивной верстки
- `src/constants/` - все токены и константы

---

**Важно:** Эти правила ОБЯЗАТЕЛЬНЫ для всех компонентов. Соблюдение гарантирует корректное отображение на любых устройствах без переносов текста и искажений дизайна.
