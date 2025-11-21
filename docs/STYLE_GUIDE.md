# Cashlly AI Finance App - Style Guide

## Overview
Cashlly — AI-powered финансовое приложение для трекинга расходов, доходов и управления личными финансами.

**Платформа:** React Native + Expo
**Бэкенд:** Supabase
**Дизайн:** Figma (fileKey: `rusG2KFbHL8jCYGWflCXGp`)

---

## 1. Colors

### Primary
| Token | HEX | RGB | Использование |
|-------|-----|-----|---------------|
| `primary` | `#9A84FF` | rgb(154, 132, 255) | Основной акцент, кнопки, активные элементы |
| `primary200` | `#B3A2FC` | rgb(179, 162, 252) | Hover/pressed состояния |

### Grayscale (Dark Theme)
| Token | HEX | RGB | Использование |
|-------|-----|-----|---------------|
| `gray100` | `#050505` | rgb(5, 5, 5) | Основной фон приложения |
| `gray200` | `#141414` | rgb(20, 20, 20) | Фон карточек, инпутов |
| `gray300` | `#2A2A2A` | rgb(42, 42, 42) | Borders, разделители |
| `gray400` | `#444444` | rgb(68, 68, 68) | Неактивные borders |
| `gray500` | `#8E8E8E` | rgb(142, 142, 142) | Вторичный текст, placeholder |
| `white` | `#FFFFFF` | rgb(255, 255, 255) | Основной текст |

### Semantic
| Token | HEX | RGB | Использование |
|-------|-----|-----|---------------|
| `success` | `#04B155` | rgb(4, 177, 85) | Доход, успешные операции |
| `error` | `#C93838` | rgb(201, 56, 56) | Расход, ошибки |
| `info` | `#0A8AF3` | rgb(10, 138, 243) | Информационные элементы |
| `accent` | `#FD7B60` | rgb(253, 123, 96) | Дополнительный акцент |

---

## 2. Typography

### Font Family
**Onest** — основной шрифт приложения
- Weights: Regular (400), SemiBold (600)
- Fallback: system font

### Text Styles
| Style | Size | Weight | Line Height | Использование |
|-------|------|--------|-------------|---------------|
| `largeTitle` | 34px | SemiBold | 44px | Заголовки экранов |
| `title1` | 28px | SemiBold | 36px | Основные заголовки |
| `title2` | 24px | SemiBold | 32px | Подзаголовки секций |
| `title3` | 20px | SemiBold | 26px | Заголовки карточек |
| `headline` | 18px | SemiBold | 24px | Акцентный текст |
| `subheadline` | 15px | SemiBold | 20px | Метки, лейблы |
| `body` | 17px | Regular | 22px | Основной текст |
| `body2` | 15px | Regular | 18px | Вторичный текст |
| `callout` | 16px | Regular | 20px | Выноски, подсказки |
| `caption1` | 18px | SemiBold | 23px | Подписи (акцент) |
| `caption2` | 15px | SemiBold | 20px | Малые подписи |
| `footnote` | 13px | Regular | 16px | Сноски, мелкий текст |

---

## 3. Spacing & Layout

### Grid
- **Device:** iPhone 14 Pro (428px width)
- **Horizontal padding:** 20px
- **Content width:** 388px

### Spacing Scale
| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 12px |
| `lg` | 16px |
| `xl` | 20px |
| `2xl` | 24px |
| `3xl` | 32px |
| `4xl` | 40px |

---

## 4. Border Radius

| Token | Value | Использование |
|-------|-------|---------------|
| `sm` | 8px | Малые элементы |
| `md` | 12px | Инпуты, карточки |
| `lg` | 16px | Большие карточки |
| `xl` | 20px | Модальные окна |
| `full` | 9999px | Кнопки pill, аватары |

---

## 5. Components

### 5.1 Buttons

#### Sizes
| Size | Height | Border Radius | Padding H | Font Size | Line Height |
|------|--------|---------------|-----------|-----------|-------------|
| `large` | 60px | 48px | 12px | 18px | 23px |
| `medium` | 56px | 56px | 8px | 15px | 20px |
| `small` | 46px | 46px | 16px | 15px | 20px |

#### Variants
```
Primary:
  - Background: #9A84FF
  - Text: #050505
  - Border: none
  - Border Radius: pill (size-specific)
  - Font: Onest SemiBold

Outline:
  - Background: transparent
  - Text: #9A84FF
  - Border: 1.5px solid #9A84FF
  - Border Radius: pill (size-specific)
  - Font: Onest SemiBold
```

#### States
- **Default:** базовые стили
- **Pressed:** opacity 0.8
- **Disabled:** opacity 0.5

#### Figma References
| Button | Node ID |
|--------|---------|
| Large (Primary + Outline) | `3298:782` |
| Medium (Primary + Outline) | `3298:1050` |
| Small (Primary + Outline) | `931:2175` |

#### Usage
```tsx
import { Button } from '@/components/ui';

// Large Primary (default)
<Button title="Continue" onPress={handlePress} />

// Large Outline
<Button title="Cancel" onPress={handlePress} variant="outline" />

// Medium Primary
<Button title="Save" onPress={handlePress} size="medium" />

// Small Outline
<Button title="Edit" onPress={handlePress} size="small" variant="outline" />

// С загрузкой
<Button title="Submit" onPress={handlePress} loading />

// Отключённая
<Button title="Disabled" onPress={handlePress} disabled />
```

---

### 5.2 Inputs

#### Base Style
```
Height: 56px
Border Radius: 43px (pill)
Background: #141414
Padding: 16px horizontal
Font: Onest Regular 17px / 22px
Text Color: #FFFFFF
Placeholder Color: #8E8E8E
```

#### States
| State | Border | Text Color |
|-------|--------|------------|
| Default | 1px solid `#2A2A2A` | `#8E8E8E` (placeholder) |
| Active | 1px solid `#9A84FF` | `#FFFFFF` |
| Field (filled) | 1px solid `#2B2433` | `#FFFFFF` |
| Error | 1px solid `#C93838` | `#8E8E8E` |
| Disabled | none | `grey` |

#### Error Message
- Font: 15px Regular
- Color: `#C93838`
- Margin top: 8px

#### Figma Reference
- Node ID: `10:3738`

#### Usage
```tsx
import { Input } from '@/components/ui';

// Default
<Input placeholder="First name here" />

// With value
<Input value={name} onChangeText={setName} placeholder="Name" />

// Error state
<Input
  value={email}
  onChangeText={setEmail}
  error="Invalid email address"
/>

// Disabled
<Input placeholder="Disabled" disabled />
```

---

### 5.3 Text Areas
```
Background: #141414
Border: 1px solid #444444
Border Radius: 12px
Padding: 16px
Min Height: 120px
Font: body (17px Regular)
```
Состояния аналогичны Input.

---

### 5.4 Dropdown / Select

#### Base Style
```
Height: 56px
Border Radius: 32-43px (pill)
Background: #141414
Padding: 16px horizontal
Font: Onest Regular 17px / 22px
Icon: chevron-down 24x24 (right, 16px from edge)
```

#### States
| State | Text Color | Icon Color |
|-------|------------|------------|
| Default | `#8E8E8E` | `#8E8E8E` |
| Disabled | `grey` | `grey` |
| Selected | `#FFFFFF` | `#FFFFFF` |

#### Figma Reference
- Node ID: `133:7240`

#### Usage
```tsx
import { Dropdown } from '@/components/ui';

<Dropdown
  placeholder="Select option"
  value={selected}
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
  onSelect={setSelected}
/>
```

---

### 5.5 Radio Button
```
Size: 24px
Border: 2px solid #8E8E8E (default)
Border Selected: 2px solid #9A84FF
Fill Selected: #9A84FF (inner circle 12px)
```

---

### 5.6 Checkbox
```
Size: 24px
Border Radius: 6px
Border: 2px solid #8E8E8E (default)
Background Selected: #9A84FF
Icon: checkmark white
```

---

### 5.7 Toggle / Switch
```
Track Width: 51px
Track Height: 31px
Thumb Size: 27px
Track Off: #2A2A2A
Track On: #9A84FF
Thumb: #FFFFFF
```

---

## 6. Icons

### Style
- **Type:** Outline / Two-tone
- **Size:** 24x24px (default), 20x20px (small), 40x40px (large)
- **Color:** `#FFFFFF` (default), `#8E8E8E` (inactive)
- **Stroke:** 1.5px

### Icon Categories
- Navigation: arrow-left, chevron, home, etc.
- Actions: plus, edit, delete, share, etc.
- Finance: wallet, card, chart, etc.
- Social: instagram, whatsapp, telegram, etc.
- Payment: visa, mastercard, apple-pay, google-pay, etc.

---

## 7. Shadows

Минимальное использование теней (dark theme):
```
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3)
shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4)
shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5)
```

---

## 8. Status Bar
- **Style:** Light content (белые иконки)
- **Background:** Transparent или `#050505`

---

## 9. Safe Areas
- **Top:** Dynamic Island / Notch safe
- **Bottom:** Home indicator safe (34px на iPhone X+)

---

## Figma References

| Section | Node ID |
|---------|---------|
| Colors | `105:224` |
| Typography | `880:991` |
| Buttons | `880:1999` |
| Icons | `880:2927` |
| Forms | `880:3781` |
| Elements | `59012:4065` |
| Grid | `10:19804` |

---

## Usage Example

```typescript
// Импорт темы
import { colors, typography, spacing } from '@/theme';

// Использование
<View style={{
  backgroundColor: colors.gray100,
  padding: spacing.xl
}}>
  <Text style={typography.title1}>
    Welcome to Cashlly
  </Text>
</View>
```
