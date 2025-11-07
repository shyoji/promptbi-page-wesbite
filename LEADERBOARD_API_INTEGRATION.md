# Leaderboard API Integration

## Overview
The leaderboard page now fetches live data from the PromptBI backend API with automatic retry mechanism for handling CORS and network errors.

## API Details

### Endpoint
```
POST https://be-prod.promptbi.ai/api/v1/p/leaderboard
```

### Query Parameters
- `fromDate`: Start date (YYYY-MM-DD format)
- `toDate`: End date (YYYY-MM-DD format) - automatically updates to current date

### Example Request
```bash
curl --location 'https://be-prod.promptbi.ai/api/v1/p/leaderboard?fromDate=2025-10-15&toDate=2025-10-17' \
--header 'Cookie: JSESSIONID=89D2A8566D83EE27E8AC20477BBD3AF0' \
--data ''
```

### Response Format
```json
[
  {
    "email": "user@example.com",
    "name": "User Name",
    "challengeTaken": 16,
    "successChallenge": 8,
    "failedChallenge": 8,
    "begineerSuccess": 0,
    "intermediateSuccess": 8,
    "expertSuccess": 0,
    "totalPoints": 14.0,
    "accuracy": 87.5
  }
]
```

## Features Implemented

### 1. Live Data Fetching
- Data is fetched automatically when the page loads
- Refreshes when time frame is changed (Week/Month/All Time)
- Manual refresh button available

### 2. Retry Mechanism
- Automatic retry on CORS or network errors
- Maximum 3 retry attempts
- 1 second delay between retries
- User-friendly error messages with retry option

### 3. Professional Field Mapping

| API Field | Display Name | Description |
|-----------|--------------|-------------|
| `name` | User Name | Participant's name |
| `email` | Email | User's email address |
| `totalPoints` | Points | Total points earned |
| `accuracy` | Accuracy | Success rate percentage |
| `challengeTaken` | Total Challenges | Total challenges attempted |
| `successChallenge` | Successful Challenges | Challenges completed successfully |
| `failedChallenge` | Failed Challenges | Challenges not completed |
| `begineerSuccess` | Beginner Level | Beginner challenges completed |
| `intermediateSuccess` | Intermediate Level | Intermediate challenges completed |
| `expertSuccess` | Expert Level | Expert challenges completed |

### 4. Dynamic Date Ranges
- **Week**: Last 7 days from today
- **Month**: Last 30 days from today
- **All Time**: From 2024-01-01 to today

### 5. User Level Classification
Users are automatically classified based on their challenge completions:
- **Beginner**: < 5 beginner successes
- **Intermediate**: ≥ 5 beginner successes
- **Advanced**: ≥ 5 intermediate successes
- **Expert**: ≥ 5 expert successes

### 6. UI Features
- Loading spinner during data fetch
- Error state with retry button
- Empty state when no data available
- Refresh indicator on manual refresh
- Color-coded level badges
- Challenge breakdown display (B/I/E)
- Accuracy percentage display
- Responsive hover effects

## File Structure

```
src/
├── services/
│   └── leaderboardService.ts    # API service with retry logic
└── pages/
    └── LeaderboardPage.tsx      # Main leaderboard component
```

## Usage

### Service Functions

```typescript
import { fetchLeaderboard } from '../services/leaderboardService';

// Fetch leaderboard data
const data = await fetchLeaderboard('month'); // 'week' | 'month' | 'all'
```

### Component State Management

```typescript
const [leaderboardData, setLeaderboardData] = useState<ApiLeaderboardUser[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [isRefreshing, setIsRefreshing] = useState(false);
```

## Error Handling

The service includes comprehensive error handling:
1. Network errors with automatic retry
2. CORS errors with retry mechanism
3. HTTP error responses with status codes
4. User-friendly error messages
5. Console logging for debugging

## Performance Optimizations

- Efficient date range calculation
- Single API call per time frame change
- Optimized re-renders with proper state management
- Lazy loading support (data fetched only when needed)

## Future Enhancements

Potential improvements for consideration:
1. Pagination for large datasets
2. Search/filter functionality
3. User profile integration
4. Real-time updates with WebSocket
5. Export leaderboard data
6. Custom date range selection
7. Challenge difficulty filters
