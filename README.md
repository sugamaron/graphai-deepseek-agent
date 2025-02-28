# DeepSeek Agent
GraphAIで使える、deepseekのLLMエージェントです。openAIとの互換性があるため、openAIエージェントとコードはほぼ同じで、apiのurlや環境変数名がdeepseekのものに置き換えられています。

## サンプルの動かし方  
1. deepseek platform(https://platform.deepseek.com )にログインし、api keyを取得する。また、クレジットを購入する。（最低2$から購入可能）
2. プロジェクトのルートディレクトリに .env ファイルを作成し、環境変数を定義する。
3. ターミナル上でプロジェクトのルートディレクトリに移動し、`npm run serve`を実行する。
