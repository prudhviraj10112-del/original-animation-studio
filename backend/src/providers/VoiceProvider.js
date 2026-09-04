export class VoiceProvider {
  async synthesize(text, voiceProfile = {}) {
    throw new Error('VoiceProvider.synthesize() must be implemented');
  }
}