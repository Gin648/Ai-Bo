<template>
  <div class="flex items-center justify-center h-full px-4 md:px-0">
    <MonacoEditor
      :model-value="code"
      :options="options"
      :lang="lang"
      class="editor w-full md:w-[400px] h-[600px] rounded-lg [&>div]:rounded-lg [&>div>div]:rounded-lg"
    />
  </div>
</template>

<script setup>
const lang = 'sol'
const options = {
  fontSize: 12,
  automaticLayout: true,
  readOnly: true,
  minimap: {
    enabled: false
  }
}
const code = `
  // AIBO
  contract AIBO_Covenant {
    address public fonder = 0x...Carl;
    mapping(address => unit) public contribution;

    // 70%
    function distributeRevenue() external {
      unit communityShare = address(this).balance * 70 / 100;

      communityPool.transfer(communityShare);
    }

    // 10
    function addRepresentative() external {
      if (userCount % 100000 == 0) {
        DAO.addSeat();
      }
    }
  }
`
</script>

<style scoped>
.editor,
.editor .monaco-editor,
.editor .monaco-editor .overflow-guard {
  border-radius: 20px;
}
</style>
